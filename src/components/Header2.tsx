import Image from "next/image";

const Header2: React.FC = () => {
  return (
    <div className="flex w-full flex-col max-md:hidden items-center">
      {/* First Layer */}
      <section className=" w-[75%]  max-lg:w-[85%] h-[41px] pt-[12px] pb-[12px] gap-[20px] mx-auto">
        <div className="flex justify-end items-center">
          <p className="text-right text-gray-500 leading-[16.8px] text-[12px] font-normal mr-4">
            회원가입
          </p>
          <p className="text-right text-gray-500 leading-[16.8px] text-[12px] font-normal">
            로그인
          </p>
        </div>
      </section>

      {/* Second Layer with Image */}
      <div className="relative flex items-center justify-center  w-[75%] max-lg:w-[85%]">
        <Image
          className="w-full"
          src="/assets/Images/header_img.svg"
          alt="Header Image"
          width={1080}
          height={180}
        />
      </div>

      {/* Third Layer with Left and Right Sections */}
      <section className="w-[75%] max-lg:w-[85%] h-[62px] flex justify-between items-center mx-auto">
        {/* Left Section - With padding for each item */}
        <div className="flex items-center ">
          <div className=" px-[30px] py-[20px] font-bold">이용 안내</div>
          <Image
            src="/assets/Icons/verticalLine.svg"
            alt="small vertical line"
            width={1}
            height={16}
          />

          <div className=" px-[30px] py-[20px] font-bold">이용권 구매</div>
          <Image
            src="/assets/Icons/verticalLine.svg"
            alt="small vertical line"
            width={1}
            height={16}
          />

          <div className="px-[30px] py-[20px] font-bold">
            <span className="text-[16px] text-[#42A8FD] w-[55px] h-[22px]">
              고등국어{" "}
            </span>
            <span className="text-[14px] text-[#868F9A]">
              {" "}
              (모의고사, EBS, 교과서)
            </span>
          </div>
          <Image
            src="/assets/Icons/verticalLine.svg"
            alt="small vertical line"
            width={1}
            height={16}
          />

          <div className=" px-[30px] py-[20px] font-bold">중학국어</div>
        </div>

        {/* Right Section - Aligning Item3 and Item4 to the left */}
        <div className="flex flex-row items-center gap-[10px]">
          <div className="flex flex-col items-center gap-1 text-[12px] font-normal text-[#868F9A] px-2">
            <Image
              src="/assets/Icons/userIcon.svg"
              alt="User Icon"
              width={22}
              height={22}
            />

            <span className="text-center">마이페이지</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-[12px] font-normal text-[#868F9A] px-2">
            <Image
              src="/assets/Icons/bagIcon.svg"
              alt="Bag Icon"
              width={22}
              height={22}
            />
            <span className="text-center">장바구니</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header2;
