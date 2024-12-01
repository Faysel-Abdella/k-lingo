"use client";
import Image from "next/image";
import Menu from "./Menu";
import { useState } from "react";

const Sidebar6 = ({ width }: { width: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`max-md:absolute z-50 relative ${width} max-md:flex-1 max-md:overflow-y-scroll`}
    >
      <div
        className="hidden max-md:block p-4 max-md:fixed max-md:top-0 w-full bg-white"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <Menu isExpanded={isExpanded} />
      </div>
      <div
        className={`flex flex-col w-full min-h-[2570px] gap-[12px] mt-0 pt-0 max-md:bg-white max-md:px-2 max-md:mt-[50px] ${
          isExpanded ? "" : "max-md:hidden"
        }`}
      >
        {/* TOP */}
        <div className="w-full min-h-[184px] flex flex-col items-center justify-center">
          <div className="h-[92px]  w-full flex flex-col items-start justify-start border-b border-l border-r p-[12px] gap-[4px]">
            <p className="text-[14px]">가입인사</p>
            <p className="text-[14px]"> 자유로운 글 & 질문 </p>
            <p className="text-[14px]">공지사항 </p>
          </div>

          <div className="h-[92px] w-full flex flex-col items-start justify-start border-b border-l border-r p-[12px] gap-[4px]">
            <p className="text-[14px]">예시 자료</p>
            <p className="text-[14px]"> 자료 목차 </p>
            <p className="text-[14px]">전체글 보기 </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center justify-between w-full min-h-[42px] border rounded-full py-[8px] px-[16px] bg-[#F3F4F6]">
          <input
            type="text"
            placeholder="전체 검색"
            className="text-[#868F9A] text-[14px] bg-[#F3F4F6] outline-none w-full"
          />
          <Image
            src="/assets/Icons/Search.svg"
            alt="Search Icon"
            width={12}
            height={12}
          />
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col w-full min-h-[2297px] ">
          {/* Variant-1 */}
          <div className="w-full min-h-[144px] flex flex-col items-center justify-center border p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                모의고사
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[92px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 고1 모의 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 고2 모의 </p>
              <p className="text-[14px] w-full min-h-[20px]">
                {" "}
                고3 모의(교육청){" "}
              </p>
              <p className="text-[14px] w-full min-h-[20px]">
                {" "}
                고3 모의(평가원, 수능){" "}
              </p>
            </div>
          </div>

          {/* Variant-2 */}
          <div className="w-full min-h-[221px] border-r border-b border-l flex flex-col items-center justify-center p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                EBS 교재
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[116px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [수능특강, 수능완성]{" "}
              </div>

              <div className="w-full min-h-[92px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">2026 수특, 수완</p>
                <p className="text-[14px] font-bold">2025 수특, 수완</p>
                <p className="text-[14px]">2024 수특, 수완</p>
                <p className="text-[14px]">2023 수특, 수완</p>
              </div>
            </div>

            <div className="w-full min-h-[45px] flex flex-col items-start justify-start pl-[8px] gap-[5px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [올림포스]{" "}
              </div>

              <div className="w-full min-h-[20px] pl-[12px] gap-[10px]">
                <p className="text-[14px]">올림포스 국어</p>
              </div>
            </div>
          </div>

          {/* Variant-2 */}
          <div className="w-full min-h-[364px] border-r border-b border-l flex flex-col items-center justify-center p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                교과서
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[236px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [2022 공통국어]{" "}
              </div>

              <div className="w-full min-h-[212px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">공국(미)</p>
                <p className="text-[14px]">공국(비강)</p>
                <p className="text-[14px]">2공국(비박)</p>
                <p className="text-[14px]">공국(천 김수)</p>
                <p className="text-[14px]">공국(천 김종)</p>
                <p className="text-[14px]">공국(지)</p>
                <p className="text-[14px]">공국(창)</p>
                <p className="text-[14px]">공국(해)</p>
                <p className="text-[14px]">공국(동)</p>
              </div>
            </div>

            <div className="w-full min-h-[68px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [2015 국어, 문학 교과서]{" "}
              </div>

              <div className="w-full min-h-[44px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">국어 목차</p>
                <p className="text-[14px]">문학 목차</p>
              </div>
            </div>
          </div>

          {/* Variant-2 */}
          <div className="w-full min-h-[292px] border-r border-b border-l flex flex-col items-center justify-center p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                문학
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[68px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [작품 해설, 정리]{" "}
              </div>

              <div className="w-full min-h-[44px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">작품 해설, 정리</p>
                <p className="text-[14px]">기본 작품 해설</p>
              </div>
            </div>

            <div className="w-full min-h-[164px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [문제]{" "}
              </div>

              <div className="w-full min-h-[140px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">기출 문제</p>
                <p className="text-[14px]">실전 문제1</p>
                <p className="text-[14px]">실전 문제2</p>
                <p className="text-[14px]">연관 문제</p>
                <p className="text-[14px]">예상 문제</p>
                <p className="text-[14px]">종합 문제</p>
              </div>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[96px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                독서
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[44px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 기출 문제 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 실전 문제 </p>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[96px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                화법과 작문
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[44px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 기출 문제 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 실전 문제</p>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[96px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                언어와 매체
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[44px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 기출 문제 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 실전 문제</p>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[120px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                문법
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[68px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 기출 문제 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 실전 문제1 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 실전 문제2 </p>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[72px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                기출 문제 해설
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[20px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]">
                {" "}
                평가원 수능 기출문제 풀이{" "}
              </p>
            </div>
          </div>

          {/* Variant-1 */}
          <div className="w-full min-h-[144px] flex flex-col items-center justify-center border-l border-b border-r p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                학습 자료
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[92px] flex flex-col items-start justify-start pl-[20px] gap-[4px]">
              <p className="text-[14px] w-full min-h-[20px]"> 문학 개념 </p>
              <p className="text-[14px] w-full min-h-[20px]">
                {" "}
                문제 풀이 해법{" "}
              </p>
              <p className="text-[14px] w-full min-h-[20px]"> 글의 장르 </p>
              <p className="text-[14px] w-full min-h-[20px]"> 수사법 </p>
            </div>
          </div>

          {/* Variant-2 */}
          <div className="w-full min-h-[290px] border-r border-b border-l flex flex-col items-center justify-center p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                2022 중학 국어
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[260px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [1학년]{" "}
              </div>

              <div className="w-full min-h-[236px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">미(신)</p>
                <p className="text-[14px]">미(민)</p>
                <p className="text-[14px]">비(박현)</p>
                <p className="text-[14px]">비(박영)</p>
                <p className="text-[14px]">천(정)</p>
                <p className="text-[14px]">천(노)</p>
                <p className="text-[14px]">지</p>
                <p className="text-[14px]">동</p>
                <p className="text-[14px]">창</p>
                <p className="text-[14px]">해</p>
              </div>
            </div>
          </div>

          {/* Variant-2 */}
          <div className="w-full min-h-[330px] border-r border-b border-l flex flex-col items-center justify-center p-[12px] gap-[8px]">
            <div className="w-full min-h-[20px] flex flex-row items-center justify-between gap-[12px]">
              <div className="text-[14px] w-full min-h-[20px] font-bold">
                2015 중학 국어
              </div>

              <div>
                <Image
                  src="/assets/Icons/UpArrow.svg"
                  alt="Up Arrow Image"
                  width={10}
                  height={5}
                />
              </div>
            </div>

            <div className="w-full min-h-[140px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [2학년]{" "}
              </div>

              <div className="w-full min-h-[116px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">미(신)</p>
                <p className="text-[14px]">비(김)</p>
                <p className="text-[14px]">천(노)</p>
                <p className="text-[14px]">천(박)</p>
                <p className="text-[14px]">지(이)</p>
              </div>
            </div>

            <div className="w-full min-h-[140px] flex flex-col items-start justify-start pl-[8px] gap-[4px]">
              <div className="w-full min-h-[20px] text-[14px] text-[#868F9A]">
                {" "}
                [3학년]{" "}
              </div>

              <div className="w-full min-h-[116px] pl-[12px] gap-[4px]">
                <p className="text-[14px]">미(신)</p>
                <p className="text-[14px]">비(김)</p>
                <p className="text-[14px]">천(노)</p>
                <p className="text-[14px]">천(박)</p>
                <p className="text-[14px]">지(이)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar6;
