const demo = [
    {
      id: 0,
      number: "111123",
      title: "(2025 수완) 실전 5회 인체 진단용 초음파 (지문 해설)",
      author: "자유로국어",
      numberOfPages: "5",
      annualMemberScore: "0.5",
      point: "1,000",
    },
  ];
  
  export const BulletInBoardT1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  