"use client";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 h-auto py-[20px] flex items-center justify-center bg-gray-100">
      {/* Inner Container */}
      <div className="w-full sm:max-w-[1150px] flex flex-col gap-[12px] px-4">
        {/* First Section: Company Info */}
        <div className="grid sm:flex sm:items-center  grid-cols-2 sm:flex-row sm:gap-[10px]">
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            자유로 도서
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            대표 : 김정진
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            사업자 등록번호 : 206-92-68506
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            통신판매신고번호 : 제2017-서울성동-0727호
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            주소 : 서울특별시 광진구 천호대로 569 (3층)
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            전화 : 02)3409-2217
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            팩스 : 02)3409-2218
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            메일 : jayurojj@naver.com
          </p>
        </div>

        {/* Second Section: Privacy Policy and Terms */}
        <div className="flex sm:flex-wrap flex-nowrap items-center justify-start gap-2 sm:gap-4">
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            개인정보 처리방침
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[11px] hover:underline">
            이용약관
          </p>
        </div>

        {/* Third Section: Copyright */}
        <div className="w-full text-gray-500 text-[8px] sm:text-[10px] text-center sm:text-left">
          <p className="hover:underline">
            Copyright © 2024 Jayuro All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
