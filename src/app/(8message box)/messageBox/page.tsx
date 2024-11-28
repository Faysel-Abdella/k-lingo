'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const MessageBox = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
        <Header />

        <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>
        
        {/* Form Container */}
        <div className="flex flex-col items-center justify-start w-[1080px] h-[308px] gap-[40px] mt-10 mb-10 flex-1">
            <h2 className="w-[1080px] h-[34px] text-center text-[24px] font-semibold text-black">메시지함</h2>

            <div className="flex flex-col justify-center items-center w-[498px] h-[234px]">
                <div className="flex flex-col items-start justify-start w-[498px] h-[78px] border-b py-[16px] gap-[4px]">
                    <div className="flex flex-row items-center justify-between w-[498px]">
                        <p className="text-[16px] font-bold">연회원 기간이 만료되었습니다.</p>
                        <Image
                            src="/assets/Icons/redDot.svg"
                            alt="Right Arrow Image"
                            width={6}
                            height={6}
                            className=""
                        />
                    </div>
                    
                    <div className="flex items-start  justify-start w-[95px] h-[20px] ">
                        <p className="text-[14px] text-[#868F9A]">YYYY-MM-DD </p>
                    </div>
                        
                </div>

                <div className="flex flex-col items-start justify-start w-[498px] h-[78px] border-b py-[16px] gap-[4px]">
                    <div className="flex flex-row items-center justify-between w-[498px]">
                        <p className="text-[16px] font-bold">연회원이 되어 주셔서 감사합니다.</p>
                    </div>
                    
                    <div className="flex items-start  justify-start w-[95px] h-[20px] ">
                        <p className="text-[14px] text-[#868F9A]">2024.10.02 </p>
                    </div>
                        
                </div>

                <div className="flex flex-col items-start justify-start w-[498px] h-[78px] border-b py-[16px] gap-[4px]">
                    <div className="flex flex-row items-center justify-between w-[498px]">
                        <p className="text-[16px] font-bold">회원 가입을 축하드립니다!</p>
                    </div>
                    
                    <div className="flex items-start  justify-start w-[95px] h-[20px] ">
                        <p className="text-[14px] text-[#868F9A]">2024.10.01</p>
                    </div>
                        
                </div>
            </div>

        </div>


        <Footer />
      
    </div>
  )
}

export default MessageBox
