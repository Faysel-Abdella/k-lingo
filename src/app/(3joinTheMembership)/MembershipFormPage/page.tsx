'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";



const MembershipFormPage = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between"> 
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[40px] mt-10 mb-10 flex-1">
        <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">회원가입</h2>
        
        <div className="flex flex-col items-center justify-center gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[12px] w-[428px]">
                <InputWithLabel
                    label="아이디"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="6~12자 영문(소문자)/숫자 입력"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"                    
                />

                <InputWithLabel
                    label="비밀번호"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="6자리 이상 영문/숫자 조합"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                />

                <InputWithLabel
                    label="비밀번호 확인"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="6자리 이상 영문/숫자 조합"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                />

                <InputWithLabel
                    label="이메일 주소"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="이메일 입력"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                />

                <InputWithLabel
                    label="이름"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="홍길동"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                    disabled={true}
                />

                <InputWithLabel
                    label="휴대폰 번호"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="010-1111-2222"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                    disabled={true}
                    
                />

                <InputWithLabel
                    label="생년월일"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="2008.01.01"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                    disabled={true}

                />

                <InputWithLabel
                    label="성별"
                    labelStyles="font-semibold w-[105px] h-[22] text-[16px]"
                    mainStyles="flex w-[428px] justify-between items-center"
                    placeholder="여성"
                    inputParentStyles="w-[323px] h-[40px]"
                    type="text"
                    disabled={true}
                />
            </div>


                {/* Submit Button */}
                <Button className="w-[428px] h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
                        가입하기
                </Button>
        </div>
        
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  )
}

export default MembershipFormPage;
