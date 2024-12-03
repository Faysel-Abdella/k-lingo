"use client";

import { Button } from "@nextui-org/react";
import InputNoLabel from "@/components/InputNoLable"; // Assuming InputNoLabel component is in the components folder
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className=" min-h-[100vh] h-auto flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)] py-4 sm:py-5 " />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start max-sm:w-[70%]  max-lg:w-[50%] w-[35%] gap-[20px] sm:gap-[40px] mt-5 mb-5 sm:mt-10 sm:mb-10 flex-1">
        {" "}
        {/* Added flex-1 for spacing */}
        <h2 className="text-left min-h-[33.6px] text-[20px] sm:text-[24px] font-bold sm:font-semibold text-black mt-[10px]">
          로그인
        </h2>
        {/* Input Fields */}
        <div className="flex flex-col items-center w-full justify-center gap-[40px]">
          <div className="flex flex-col items-center w-full justify-center gap-[12px]">
            <div className="flex flex-col items-center justify-center gap-[10px] w-full">
              <InputNoLabel
                placeholder="아이디를 입력해 주세요"
                mainStyles="w-full"
                inputParentStyles="w-[100%]"
                inputStyles="text-[12px] sm:text-[20px]"
              />

              <InputNoLabel
                placeholder="비밀번호를 입력해 주세요"
                mainStyles="w-full"
                inputParentStyles="w-[100%]"
                inputStyles="text-[12px] sm:text-[20px]"
                type="text"
              />

              {/* Submit Button */}
              <Button className="w-full min-h-[42px] px-3 py-1 sm:px-5 sm:py-2 bg-[#42A8FD] hover:bg-[#489de2] text-[12px] sm:text-[16px] font-semibold text-white rounded-md">
                로그인
              </Button>
            </div>

            <div className=" flex flex-row items-center justify-center">
              <div className="text-[12px] sm:text-[16px] px-5 sm:px-7 text-[#868F9A] ">
                아이디 찾기
              </div>
              <div className="text-[12px] sm:text-[16px] px-5 sm:px-7 text-[#868F9A] ">
                비밀번호 찾기
              </div>
            </div>
          </div>

          <hr className="w-full border-t-1 border-[rgb(207,212,218)] my-2 sm:my-4" />

          <div className="flex flex-col items-center w-full justify-center gap-[20px]">
            <div className="flex flex-row items-center justify-center text-[12px] sm:text-[16px]">
              아직 회원이 아니세요?
            </div>
            <div className="flex flex-col items-center w-full justify-center">
              <Button
                variant="bordered"
                className="w-full min-h-[50px] text-[12px] sm:text-[16px] px-4 py-1 sm:px-5 sm:py-2 font-semibold bg-white border-[#42A8FD] text-[#42A8FD] hover:text-blue-400 rounded-md hover:bg-slate-200"
              >
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Login;
