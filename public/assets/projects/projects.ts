export const projects = [
  {
    id: 0,
    date: "2022-06",
    imgUrl:
      "https://github.com/pseudopool/toomanythoughts/blob/master/metaimage.png?raw=true",
    title: "toomanythoughts.",
    description:
      "생각이 너무 많을 때, 나의 생각에 어떤 인지왜곡이 있는지 객관적으로 바라볼 수 있게 도와주는 인지행동치료(CBT) 기반 고민 기록 앱입니다. 파이어베이스를 통한 OAuth 및 데이터베이스 기능 구현, 웹팩을 이용한 배포 등을 실습하기 위해 제작했습니다.",
    github: "https://github.com/pseudopool/toomanythoughts",
    skills: [
      "React",
      "React-Router-Dom",
      "Styled-Components",
      "Webpack",
      "Firebase",
    ],
    blog: "/posts",
  },
  {
    id: 1,
    date: "2022-07",
    imgUrl: "",
    title: "shelf surfer",
    description:
      "매일의 무드에 맞게 나만의 책장 만들 수 있는 북리스트 앱입니다. firebase OAuth를 통해 회원가입 및 로그인을 구현하고, 네이버 책 API를 연동해 원하는 도서를 검색할 수 있습니다. firestore DB로 나만의 책장을 생성, 수정, 삭제할 수 있습니다. NextJS로 서버 사이드 데이터 페치를 실습하기 위해 제작했습니다.",
    github: "https://github.com/pseudopool/toomanythoughts",
    skills: ["Next.js", "Emotion", "Firebase", "Recoil", "Vercel"],
    blog: "/posts",
  },
  {
    id: 2,
    date: "2022-10",
    imgUrl: "/assets/projects/images/metaTaiscookie.png",
    title: "Tai's Cookie",
    description:
      "Next.js로 개발한 개인 블로그입니다. 마크다운 파일로 작성한 포스트를 html로 파싱해 불러옵니다. Next.js의 getStaticPaths와 getStaticProps를 활용해 정적 페이지를 생성합니다.",
    github: "https://github.com/pseudopool/taiscookie",
    skills: ["Next.js", "Emotion", "Remark"],
    blog: "/posts/making-markdown-posts-by-nextjs",
  },
  {
    id: 3,
    date: "2022-10",
    imgUrl: "/assets/projects/images/metaSancheck.png",
    title: "ㅅㅊ : 동네 기반 반려견 산책 플랫폼",
    description:
      "프론트엔드 개발자 2인, 백엔드 개발자 2인이 협업해 만든 로컬 펫 개더링 플랫폼입니다. React Query를 도입해, 데이터 상태에 따라 다양한 컴포넌트가 렌더 되도록 했습니다.",
    github: "https://github.com/codestates-seb/seb39_main_026",
    skills: ["TypeScript", "Next.jS", "React Query", "Recoil", "Emotion"],
    blog: "/posts",
  },
];
