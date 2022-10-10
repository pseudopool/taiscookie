---
title: "Next.js로 만드는 블로그 A to Z"
excerpt: "fs 파일 가져오기부터 마크다운 파싱까지"
coverImage: "/assets/posts/making-markdown-posts-by-nextjs/cover.png"
date: "2022-10-10T05:35:07.322Z"
ogImage:
  url: "/assets/posts/making-markdown-posts-by-nextjs/cover.png"
---

# 🛠 Next.js로 블로그 만들기

개인 블로그를 Next.js를 사용해 만들기로 했다. 정적 블로그 생성을 위해 많이 쓰이는 개츠비gatsby와 고민을 했는데, 두 프레임워크 간 큰 차이가 없는 가운데 개츠비가 블로그용 템플릿을 폭넓게 지원해준다는 점에서 선호되는 것 같아 내게는 더 익숙한 Next.js를 선택했다.

개츠비가 지원해주는 블로그용 템플릿에 마크다운 문서만 착착 넣어 블로그를 만들기보다는, fs + Next.js의 정적 페이지 지원 메서드들을 사용해 직접 특정 디렉토리 내 마크다운 문서들을 html로 파싱하고 dynamic routing으로 정적 페이지를 생성해주기로 했다. 대략적인 순서는 아래와 같다.

1. src 디렉토리 내 \_posts 디렉토리에 블로그 포스트가 될 md 파일을 작성한다.
2. pages/posts/index.tsx 경로에 \_posts 디렉토리의 모든 파일을 리스트로 가져온 후, 클릭 시 해당 파일의 이름을 slug로 가진 url로 이동하도록 한다. (예: hello-from-tai.md는 /posts/hello-from-tai라는 url을 가진 페이지로 생성된다.)
3. pages/posts/[slug].tsx 경로에 해당 slug를 이름으로 가진 마크다운 파일의 내용을 html로 파싱해 보여준다.

## 📃 md 파일의 형식

포스트가 될 md 파일은 우선, 리스트에 보여질 요약 정보를 담은 front-matter 영역을 아래와 같이 구성했다.

- title : 해당 포스트의 타이틀
- excerpt : 해당 포스트를 요약한 내용
- coverImage : 대표 이미지의 경로
- date : 작성 날짜
- ogImage :
  - url : SEO를 위한 오픈 그래프에 삽입될 이미지

## 💾 포스트 리스트를 보여주기

Dynamic routing이 적용된 포스트 페이지로 진입하기 전에, 모든 포스트의 리스트를 보여주는 인덱스 페이지 구성을 먼저 했다. 그러기 위해서는 아래 세 가지 유틸리티가 필요했다.

- getPostBySlug : 특정 slug를 url로 가진 페이지 진입 시, 해당 slug를 타이틀로 가진 마크다운 파일을 가져오는 유틸리티다.

```javascript
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string,
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
```

- getAllSlugs : 모든 포스트의 제목을 가져오는 유틸리티다. fs의 readdirSync메서드를 통해 구현해주었다.

```javascript
const postsDirectory = join(process.cwd(), "/src/_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
```

- getAllPosts : 모든 포스트의 front-matter을 가져오는 유틸리티다.

```javascript
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // 포스트를 최신 날짜로 정렬한다.
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
```

유틸리티 준비가 끝났으니, 본격적으로 posts/index.tsx 경로에 getStaticProps를 통해 모든 정보를 서버에서 미리 불러와 props로 넘겨준다.

```javascript
// posts/index.tsx
export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>타이의 블로그</title>
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
```

이후 모든 포스트의 배열을 props로 받은 AllPosts 컴포넌트에서 map 메서드를 사용해 각각의 포스트들을 리스트로 보여주면 끝이다! 이렇게 간단할 수가.

## 🥚 포스트 페이지 동적 라우팅

이제 특정 포스트의 제목을 클릭하면, 해당 md 파일의 이름이 url로 세팅되고 포스트의 내용이 보여지게 해야 한다. 미리 만들어 둔 getPostBySlug 유틸리티와 Next.js의 getStaticProps, getStaticPaths를 이용해보자.

- getStaticPaths를 통한 라우팅

```javascript
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
```

- getStaticProps를 통한 포스트 내용 가져오기

✨ remark 라이브러리를 이용해, 먼저 마크다운 파일을 html으로 파싱한 후 props로 보내주었다.

```javascript
// utils/markdownToHtml.ts
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// posts/[slug].tsx
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
```

이제 가져온 데이터들을 필요한 컴포넌트에 잘 내려주기만 하면 된다. 유효하지 않은 slug를 보냈거나(url이 잘못되었거나) 로딩 중인 경우도 따로 처리해준다.

```javascript
export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        "Loading…"
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | 타이의 블로그</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostTitle
              title={post.title}
              date={post.date}
              img={post.ogImage.url}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  );
}
```

이렇게 마크다운 파일을 포스트로 변환해 블로그를 만드는 여정이 마무리 되었다. fs를 다루는 게 익숙하지 않아서 쉽지 않을 거라 예상했는데, Next.js의 getStaticPaths나 getStaticProps를 적절히 활용하니 큰 어려움 없이 해나갈 수 있었다. 마크다운 파일의 html 파싱 역시 remark 라이브러리를 사용하니 수월했다.

처음 스스로 만든 개인 블로그인 만큼, 애정을 가지고 꾸준히 리팩토링 하고 웹 표준이나 접근성, SEO도 잘 챙겨가며 유지해야겠다!
