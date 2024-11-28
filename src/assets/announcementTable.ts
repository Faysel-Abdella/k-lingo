const demo = [
    {
      id: 0,
      number: "111123",
      title: "출제하실 분 모십니다",
      author: "자유로국어",
      date: "24.11.01",
    },
  ];
  
  export const announcementT1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  