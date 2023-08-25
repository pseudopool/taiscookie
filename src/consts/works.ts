export const WORKS = [
  {
    name: "케이타운포유",
    description:
      "Ktown4u는 전세계 5,000여개 팬클럽을 통해 1.4억명 팬들과 연결된 엔터테인먼트 이커머스 플랫폼입니다. 아티스트 음반과 굿즈부터 K-beauty와 K-style까지 확장된 다양한 제품과 글로벌 팬들을 연결합니다.",
    url: "https://www.ktown4u.com/",
    image: "/assets/works/images/ktown4u.png",
    role: "Frontend Developer",
    period: "2023.01 ~ ",
    tech: [
      "HTML/CSS",
      "TypeScript",
      "React",
      "Next.js",
      "i18next",
      "React Query",
      "Apollo Client",
      "Recoil",
      "Tailwind CSS",
      "Storybook",
    ],
    projects: [
      {
        name: "이벤트 TF",
        description:
          "이벤트 페이지 프레임워크 전환 및 응원 댓글 기능 신규 개발",
        features: [
          "기존 C# 기반 백오피스에서 진행하던 이벤트 관리를 웹 기반 백오피스로 마이그레이션",
          "개발 상태 칸반 및 테스트 시나리오 공유로 불필요한 커뮤니케이션 로드 감축 및 현업 테스트 일정 개선",
          "유저가 해당 영역에 도달했을 경우에만 관련 API를 호출하도록 Intersect Observer를 통한 최적화",
          "MSW를 통한 request intercept로 API 교체 속도 개선",
        ],
        period: "2023.06 ~ 2023.07",
      },
      {
        name: "리뷰 TF",
        description: "상품 페이지 프레임워크 전환 및 리뷰 탭 신규 개발",
        features: [
          "레거시 도메인 및 비즈니스 로직을 커스텀 훅으로 분리해 테스트 가능한 코드로 개선",
          "불필요한 API 호출 제어를 위한 컴포넌트 최적화",
        ],
        period: "2023.04 ~ 2023.05",
      },
      {
        name: "프레임워크 전환",
        description: "레거시 프론트엔드 Next.js 마이그레이션",
        features: [
          "상품 상세페이지, 이벤트 리스트 페이지, 이벤트 상세 페이지 등 주요 트래픽 페이지 프레임워크 전환",
          "SSR 및 meta 태그를 통한 Open Graph를 지원해 SNS 공유 시 요약 정보 제공",
          "웹 표준 준수로 접근성 및 SEO 개선",
        ],
        period: "2023.01 ~ ",
      },
      {
        name: "UX 개선",
        description: "유저 경험 향상을 위한 공통 컴포넌트 및 훅 개발",
        features: [
          "효율적인 레이아웃 탐색을 위한 Collabsible UI 개발",
          "컨텐츠 영역 추가 확보를 위한 스크롤 시 유연하게 변화하는 헤더 개발",
          "페이지 이동 시 불편 요소 제거를 위한 공통으로 사용 가능한 스크롤 저장 훅 개발",
        ],
        period: "2023.01 ~ ",
      },
    ],
  },
];
