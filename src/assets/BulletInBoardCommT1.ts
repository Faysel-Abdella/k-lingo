const demo = [
    {
      id: 0,
      number: "111123",
      title: "안녕하세요",
      author: "idid123",
      date: "24.11.01",
      views: "100",
    },
  ];
  
  export const BulletInBoardComm = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  