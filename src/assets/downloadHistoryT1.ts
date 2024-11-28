const demo = [
    {
      id: 0,
      number: "111123",
      title: "2024-10월(고1) 국어 문제 파일",
      author: "자유로국어",
      numberOfPages: "5",
      annualMemberScore: "0.5",
      point: "1,000",
      reDownload: "재다운로드",

    },
  ];
  
  export const DownloadHistory = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  