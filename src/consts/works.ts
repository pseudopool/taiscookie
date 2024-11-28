export const jobs = [
  {
    name: "케이타운포유",
    globalName: "Ktown4u",
    role: "Software Engineer, Front-end",
    link: "https://www.ktown4u.com",
    enterDate: "2023.01.02",
    leaveDate: null,
    description:
      "Ktown4u는 전세계 5,000여개 팬클럽을 통해 1.4억명 팬들과 연결된 엔터테인먼트 이커머스 플랫폼입니다. 아티스트 음반과 굿즈부터 K-beauty와 K-style까지 확장된 다양한 제품과 글로벌 팬들을 연결합니다.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Tailwind CSS",
      "Jest",
      "MSW",
      "Storybook",
      "Datadog",
    ],
    works: {
      Features: [
        {
          title: "장바구니 기능 신규 개발",
          contents: [
            "FO 장바구니 페이지 및 상품 추가, 삭제, 수량 변경 기능",
            "Feature Flag를 통한 레거시 장바구니 서비스 분기 및 이중운영",
            "LocalStorage를 통한 게스트 유저용 장바구니 구현",
            "국내 법규 준수를 위한 본인인증 API 연동",
          ],
        },
        {
          title: "콘텐츠 기능 신규 개발",
          contents: [
            "FO 콘텐츠 리스트 및 상세 페이지",
            "FO 좋아요, 댓글 CRUD",
            "Client Storage 기반 비로그인 유저 좋아요 기능 구현 및 로그인 시 동기화",
            "BO 콘텐츠 등록, 편집 및 상태 관리(임시 저장, 발행) 기능 개발",
            "BO 댓글 관리 기능",
          ],
        },
        {
          title: "서포트 댓글 기능 신규 개발",
          contents: [
            "아티스트 이벤트 페이지 내 서포트 댓글 작성 및 조회 기능",
            "유저 상태(구매자, 로그인, 비로그인)에 따른 댓글 기능 제어",
            "BO 서포트 댓글 관리 기능",
          ],
        },
        {
          title: "리뷰 기능 신규 개발",
          contents: [
            "마이페이지 내 작성 가능한 리뷰 리스트 출력",
            "리뷰 작성 및 별점 기능",
            "리뷰 미디어(이미지, 동영상) 업로드 및 미리보기",
            "리뷰 댓글, 대댓글 및 좋아요 기능",
            "BO 리뷰 및 댓글 관리 기능",
          ],
        },
      ],
      "UI/UX": [
        {
          title: "UX 개선을 위한 공통 컴포넌트 및 훅 개발",
          contents: [
            "Collabsible UI 개발로 레이아웃 최적화 및 사용성 개선",
            "스크롤 시 유연하게 변화하는 탑앱바 개발로 컨텐츠 영역 추가 확보",
            "공통으로 사용 가능한 스크롤 저장 훅 개발로 페이지 이동 시 불편 요소 제거",
            "라우팅 시 중복 request 방지를 위한 full page 로더 제안 및 적용",
          ],
        },
      ],
      Performance: [
        {
          title: "클라이언트 반응 속도 개선",
          contents: [
            "Optimistic response를 활용한 즉각적인 데이터 업데이트",
            "데이터 상태관리 라이브러리를 활용한 캐싱 적용 및 server-client 간 데이터 동기화",
          ],
        },
        {
          title: "테스트 환경 구축",
          contents: [
            "MSW를 통한 request intercept로 테스트 환경 및 API 교체 속도 개선",
            "레거시 도메인 및 비즈니스 로직을 테스트 가능한 코드로 개선",
          ],
        },
        {
          title: "레거시 프론트엔드 Next.js 전환",
          contents: [
            "상품, 이벤트 등 주요 트래픽 페이지 Speed Index 개선",
            "Next.js API Datadog 로깅",
            "GraphQL Client Schema",
            "Open Graph Protocol 지원",
            "웹 표준 준수로 접근성 및 SEO 개선",
          ],
        },
      ],
    },
  },
];

export type Job = (typeof jobs)[0];
