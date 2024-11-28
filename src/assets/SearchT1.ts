const demo = [
    {
      id: 0,
      number: "111123",
      title: "사미인곡(정철) -14수특 A",
      author: "자유로국어",
      numberOfPages: "5",
      annualMemberScore: "0.5",
      point: "1,000",

    },
  ];
  
  export const SearchT1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      id: index + 1,
      number: index + 1,
    })),
  ];
  
  