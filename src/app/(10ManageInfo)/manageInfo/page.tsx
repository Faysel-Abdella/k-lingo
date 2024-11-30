import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const ManageInfo = () => {
  return (
    <div className="min-h-[1117px] max-md:h-[100vh] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-full  min-h-[293px] gap-[10px] mt-10 mb-10 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          마이페이지
        </h2>

        <div className="flex flex-cols items-center justify-center w-full min-h-[108px]">
          {/* Full-width border container */}
          <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
            {/* Inner content container */}
            <div className="flex  max-md:w-[75%] w-[45%] flex-row items-center justify-between gap-[20px]">
              <div className="border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">
                내 정보 관리
              </div>
              <div className="text-[#868F9A] pb-3 font-bold">
                이용권 및 결제 내역
              </div>
              <div className="text-[#868F9A] pb-3 font-bold">다운로드 내역</div>
              <div className="text-[#868F9A] pb-3 font-bold">나의 활동</div>
            </div>
          </div>
        </div>
        <div className="max-sm:w-[85%] max-lg:w-[55%] w-[45%] flex justify-center items-center">
          <div className="flex flex-col w-[80%] items-center justify-center gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[12px] w-full">
              <InputWithLabel
                label="아이디"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="abc123"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

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
                mainStyles="flex w-full justify-between items-center"
                placeholder="6자리 이상 영문/숫자 조합"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

              <InputWithLabel
                label="이메일 주소"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="abc@aaa.com"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

              <InputWithLabel
                label="이름"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="홍길동"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

              <InputWithLabel
                label="휴대폰 번호"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="010-1111-2222"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

              <InputWithLabel
                label="생년월일"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="2008.01.01"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
              />

              <InputWithLabel
                label="성별"
                labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                mainStyles="flex w-full justify-between items-center"
                placeholder="여성"
                inputParentStyles="w-full min-h-[40px]"
                type="text"
                disabled={true}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-[20px]">
              {/* Submit Button */}
              <Button className="w-full min-h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
                수정하기
              </Button>

              <p className="text-[14px] text-[#868F9A] pb-2">탈퇴하기</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default ManageInfo;
