const demo = [
    {
      id: 0,
      title: "결제가 안 되는데 어떻게 해요?",
      creationDate: "2024.11.05",
      situation: "답변완료",
    //   numberOfPages: "5",
    //   annualMemberScore: "0.5",
    //   point: "1,000",
    //   reDownload: "재다운로드",

    },
  ];
  
  export const ActivityInquiryTable = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  