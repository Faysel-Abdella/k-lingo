'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody } from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";


const FindIdInformation = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
        <Header />

        <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>

        {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[40px] mt-10 mb-10 flex-1">
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">아이디/비밀번호 찾기</h2>
          <h2 className="w-[500px] h-[34px] text-center text-[20px]  text-[#868F9A]">회원님의 정보와 일치하는 아이디입니다.</h2>
        </div>

        <div className="flex flex-row items-center justify-center w-[428] h-[50]">
            <div className="flex items-center justify-center w-[214px] h-[50px] pt-[14px] pb-[14px] gap-[10px] text-[16px] border-[#42A8FD] border-t border-r border-l font-semibold">
                    아이디 찾기
            </div>

            <div className="flex items-center justify-center w-[214px] h-[50px] pt-[14px] pb-[14px] gap-[10px] text-[#868F9A] text-[16px] border-[#42A8FD] border-b font-semibold">
                    비밀번호 찾기
            </div>
        </div>
        

        
        <div className="flex flex-col items-center justify-center gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[12px] w-[428px]">
            <Card className="w-[428px] h-[83px] bg-[#F3F4F6] shadow-none rounded-sm">
                <CardBody className="flex items-center justify-center h-full">
                    <p className=" text-[16px] text-[#792FFF] w-[64] h-[22] font-semibold">abc1234</p>
                </CardBody>
            </Card>
                
            </div>


                {/* Submit Button */}
                <Button className="w-[428px] h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
                        로그인 하기
                </Button>
        </div>
        
      </div>

        <Footer />
      
    </div>
  )
}

export default FindIdInformation
