"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";

const ChangePassword = () => {
  return (
    <div className="min-h-[1117px] max-md:h-[100vh] flex flex-col items-center justify-between">
      <Header />

      <hr className="w-full border-t-1  border-[rgb(207,212,218)]  py-5 " />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start max-sm:w-[85%] max-lg:w-[55%] w-[35%] min-h-[293px] gap-[60px] mt-10 mb-10 flex-1">
        <div className="flex flex-col items-center justify-center w-full gap-[8px]">
          <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
            비밀번호 변경
          </h2>
          <h2 className="w-full min-h-[34px] text-center text-[18.5px]  text-[#868F9A]">
            새로운 비밀번호를 입력해 주세요
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-[55px]">
          <div className="flex flex-col items-center justify-center gap-[12px] w-full">
            <InputWithLabel
              label="비밀번호"
              labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
              mainStyles="flex w-full justify-between items-center"
              placeholder="6자리 이상 영문/숫자 조합"
              inputParentStyles="w-full min-h-[40px]"
              type="text"
            />

            <InputWithLabel
              label="비밀번호 확인"
              labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
              mainStyles="flex  w-full justify-between items-center"
              placeholder="6자리 이상 영문/숫자 조합"
              inputParentStyles="w-full min-w-[40px]"
              type="text"
            />
          </div>

          {/* Submit Button */}
          <Button className=" w-full h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
            확인
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChangePassword;
