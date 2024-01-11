export const WORKS = [
  {
    name: '케이타운포유',
    location: 'Seoul, Korea',
    description:
      'Ktown4u는 전세계 5,000여개 팬클럽을 통해 1.4억명 팬들과 연결된 엔터테인먼트 이커머스 플랫폼입니다. 아티스트 음반과 굿즈부터 K-beauty와 K-style까지 확장된 다양한 제품과 글로벌 팬들을 연결합니다.',
    url: 'https://www.ktown4u.com/',
    image: '/assets/works/images/ktown4u.png',
    role: 'Frontend Developer',
    period: '2023.01 ~ ',
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'i18next',
      'React Query',
      'Apollo Client',
      'Recoil',
      'Tailwind CSS',
      'Storybook',
    ],
    projects: [
      {
        name: '컨텐츠 TF',
        description: '컨텐츠 페이지 신규 개발',
        features: [
          '재사용 가능한 UI/UX 가이드라인 공유를 위한 팀간 협업 및 스타일 configuration 적용',
          'Optimistic Response 적용을 통한 UX 개선',
        ],
        period: '2023.11 ~ 2023.12',
      },
      {
        name: '이벤트 TF',
        description:
          '이벤트 페이지 프레임워크 전환 및 서포트 댓글 기능 신규 개발',
        features: [
          'C# 기반 백오피스 기능 일부 웹으로 마이그레이션',
          'MSW를 통한 request intercept로 테스트 환경 및 API 교체 속도 개선',
          '개발 상태 칸반 및 테스트 시나리오 공유로 불필요한 커뮤니케이션 로드 감축 및 현업 테스트 일정 개선',
        ],
        period: '2023.06 ~ 2023.07',
      },
      {
        name: '리뷰 TF',
        description: '리뷰 기능 신규 개발',
        features: [
          '레거시 도메인 및 비즈니스 로직을 테스트 가능한 코드로 개선',
          '불필요한 API 호출 제어를 위한 클라이언트 컴포넌트 최적화',
          'POST 요청 후 캐시 업데이트 로직 적용으로 백엔드 캐싱 타임 대응',
        ],
        period: '2023.04 ~ 2023.05',
      },
      {
        name: '프레임워크 전환',
        description: '레거시 프론트엔드 Next.js 마이그레이션',
        features: [
          '주요 트래픽 페이지(상품, 이벤트 페이지 등) 프레임워크 전환',
          'SSR을 통한 Open Graph Protocol 지원',
          '웹 표준 준수로 Light House 접근성 및 SEO 개선',
        ],
        period: '2023.01 ~ ',
      },
      {
        name: 'UX 개선',
        description: 'UX 개선을 위한 공통 컴포넌트 및 훅 개발',
        features: [
          '효율적인 레이아웃 탐색을 위해 Collabsible UI 개발',
          '컨텐츠 영역 추가 확보를 위해 스크롤 시 유연하게 변화하는 헤더 개발',
          '페이지 이동 시 불편 요소 제거를 위해 공통으로 사용 가능한 스크롤 저장 훅 개발',
        ],
        period: '2023.01 ~ ',
      },
    ],
  },
];
