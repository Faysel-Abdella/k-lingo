"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import Image from "next/image";

const TermsOfUse = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2 " />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[75%] h-[624px] gap-[40px] mt-10 mb-40 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          개인정보처리방침
        </h2>

        <div className="w-full min-h-[550px] gap-[4px]">
          <p className="text-[16px]">제1장 총칙</p>
          <br />
          <p className="text-[16px]">제1조(목적)</p>
          <p className="text-[16px]">
            본 약관은 자유로국어 (이하 &quot;당 사이트&quot;)가 제공하는 모든
            서비스(이하 &quot;서비스&quot;)의 이용조건 및 절차, 이용자와 당
            사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로
            합니다.
          </p>
          <br />
          <p className="text-[16px]">제2조(용어의 정의)</p>
          <p className="text-[16px]">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </p>
          <br />
          <p className="text-[16px]">
            ① 이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 이용할 수
            있는 자.
          </p>
          <p className="text-[16px]">
            ② 가 입 : 당 사이트가 제공하는 신청서 양식에 해당 정보를 기입하고,
            본 약관에 동의하여 서비스 이용계약을 완료시키는 행위
          </p>
          <p className="text-[16px]">
            ③ 회 원 : 당 사이트에 개인정보 등 관련 정보를 제공하여 회원등록을 한
            개인(재외국민, 국내거주 외국인 포함)또는 법인으로서 당 사이트의
            정보를 제공 받으며, 당 사이트가 제공하 는 서비스를 이용할 수 있는
            자.
          </p>
          <p className="text-[16px]">
            ④ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 문자와
            숫자의 조합으로 설정한 고유의 체계
          </p>
          <p className="text-[16px]">
            ⑤ 비밀번호 : 이용자와 아이디가 일치하는지를 확인하고 통신상의 자신의
            비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합.
          </p>
          <p className="text-[16px]">
            ⑥ 탈 퇴 : 회원이 이용계약을 종료 시키는 행위
          </p>
          <p className="text-[16px]">
            ⑦ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및
            이용규정에서 정의하거나 일반적인 개념에 의합니다.
          </p>
          <br />
          <br />
          <p className="text-[16px]">제3조(약관의 효력과 변경)</p>
          <p className="text-[16px]">
            ① 당 사이트는 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게
            서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의하는 경우, 당
            사이트의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이
            우선적으로 적용됩니다.
          </p>
          <p className="text-[16px]">
            ② 당 사이트는 본 약관을 변경할 수 있으며, 변경된 약관은 당 사이트
            내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 약관을
            변경할 경우에는 적용일자 및 변경사유를 명시하여 당 사이트 내에 그
            적용일자 30일 전부터 공지합니다. 약관 변경 공지 후 이용자가
            명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 이용자가
            약관에 동의한 것으로 간주합니다. 이용자가 변경된 약관에 동의하지
            아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수
            있습니다.
          </p>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default TermsOfUse;
