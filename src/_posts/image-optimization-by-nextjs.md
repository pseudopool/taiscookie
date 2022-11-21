---
title: "이미지 로드 시간을 견딜 수 없어서 😶‍🌫️"
excerpt: "blurDataURL를 통한 Next.js 이미지 블러 처리"
coverImage: "/assets/posts/image-optimization-by-nextjs/cover.png"
date: "2022-11-21T05:12:46.042Z"
ogImage:
  url: "/assets/posts/image-optimization-by-nextjs/cover.png"
---

# 🫠 깜빡이는 이미지가 거슬리기 시작했을 때

블로그를 만들고 나서, 포트폴리오 페이지와 포스트 목록 페이지에 각각 썸네일 이미지를 넣어주었다. 그런데 페이지에 접근할 때, 이미지가 로드되는 시간 때문에 빈 화면이 보였다가 이미지가 등장하는 것이 신경 쓰여서 리팩토링 하기로 마음 먹었다.

## 📃 Next.js의 Image 컴포넌트

블로그에 쓰인 이미지는 기존 html 태그인 `<img>`가 아닌 Next.js의 이미지 컴포넌트인 `<Image>`를 사용했는데, 다음과 같은 이유 때문이었다.

- 성능 향상 : 모던 이미지 포맷을 사용해 각 디바이스에 맞는 사이즈의 이미지를 가져온다.
- 화면 안정성 : 레이아웃 쉬프트를 자동 방지한다.
- 빠른 페이지 로드 : 유저가 뷰포트에 진입할 때만 이미지가 로드된다.
- 에셋 유연성: 리모트 서버에 있는 이미지도 온디맨드로 리사이징한다.
  (출처 : Next.js 공식 문서)

Image 컴포넌트를 통해 외부 이미지 소스를 가져오려면 아래와 같은 Props가 필수적이다.

```javascript
<Image
  src="/me.png"
  alt="Picture of the author"
  width={500} // 레이아웃 쉬프트 방지를 위해 너비와 높이를 지정해주어야 한다
  height={500} // 부모 컴포넌트의 크기에 맞추고 싶을 때는, fill을 사용할 수도 있다
/>
```

기존에는 필수적인 Props인 width와 height만 설정해주었다가, 이미지 로드 시 placeholder 세팅을 위해 `placeholder`와 `blurDataURL` Props를 추가해주었다.

## ☁️ placeholder & blurDataURL

Image 컴포넌트의 placeholder는 이미지가 로드 될 동안 화면에 나타낼 요소를 설정하는 Props다. 기본 세팅은 `empty`고, 이미지가 로드되는 동안 블러 처리된 이미지를 보여주기 위해서는 `blur`로 설정할 수 있다.

```javascript
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500} // 레이아웃 쉬프트 방지를 위해 너비와 높이를 지정해주어야 한다
        height={500} // 부모 컴포넌트의 크기에 맞추고 싶을 때는, fill을 사용할 수도 있다
        placeholder="blur"
        blurDataURL= //base64로 인코딩 된 이미지 소스
      />
```

`blur`로 설정했을 경우에는 추가적으로 blurDataURL이라는 Props를 넣어주어야 하고, 바로 여기에 base64 형식의 이미지 소스를 넣으면 해당 이미지가 로드 될 동안 블러 이미지를 보여줄 수 있다.

## 🛠 base64 형식의 이미지 만들기

Next.js 공식 문서에서는 위 blurDataURL에 들어갈 이미지 소스 생성을 위해 `plaiceholder`라는 라이브러리를 사용할 것을 추천하고 있다. 사용법은 매우 간단하다.

```javascript
import { getPlaiceholder } from "plaiceholder";

const { base64 } = await getPlaiceholder("/path-to-your-image.jpg");
```

plaiceholder 라이브러리로부터 `getPlaiceholder`라는 메서드를 불러와 base64로 인코딩된 값을 얻어오면 된다.

이 블로그의 모든 데이터는 서버 사이드에서 처리되고 있기 때문에, `getStaticProps` 안에 해당 코드를 넣어 페이지에 Props로 넘겨주었다. 이제 모든 이미지들이 로드 되는 동안 자연스럽게 블러 이미지를 불러오게 됐다 :)
