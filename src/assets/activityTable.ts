const demo = [
    {
      id: 0,
      title: "안녕하세요",
      noticeBoard: "자유로운 글 & 질문",
      creationDate: "2024.11.05",
      great: "10",
      comment: "3",
      views: "100",


    //   numberOfPages: "5",
    //   annualMemberScore: "0.5",
    //   point: "1,000",
    //   reDownload: "재다운로드",

    },
  ];
  
  export const ActivityTable = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  