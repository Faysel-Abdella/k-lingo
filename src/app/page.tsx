"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Checkbox, Button } from "@nextui-org/react";
import { ShoppingCartTable } from "@/assets/shoppingCart";
import Image from "next/image";
import InputNoLabel from "@/components/InputNoLable";
import DropDown from "@/components/DropDown";
import { RadioGroup, Radio } from "@nextui-org/react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const HomePage = () => {
  const options = [
    { key: "1", label: "이전글" },
    { key: "2", label: "다음글" },
  ];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 4;

  const pages = Math.ceil(ShoppingCartTable.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(ShoppingCartTable.slice(start, end));
    return ShoppingCartTable.slice(start, end);
  }, [page, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <div className="min-h-[100vh] h-auto flex flex-col items-center relative">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}

      <div className="flex flex-row gap-4 justify-between w-[75%] max-lg:w-[85%] max-md:w-full">
        {/* SideBar */}
        <Sidebar width="[30%]" />

        {/* RightSide */}
        <div className="flex flex-col items-center w-full max-md:mt-10 py-[24px] max-md:px-4">
          <div className="flex flex-col w-full h-auto gap-[20px]">
            {/* ---- Top ---- */}
            <div className="flex flex-row max-sm:flex-col max-sm:justify-center items-center justify-between w-full h-auto max-sm:gap-[26px] ">
              <div className="text-[24px] font-bold">고등 국어</div>

              <div className="flex flex-row items-center justify-between w-[325px] max-sm:w-[75%] h-[36px] border rounded-full py-[8px] px-[16px] bg-[#F3F4F6]">
                <input
                  type="text"
                  placeholder="고등 자료 검색"
                  className="text-[#868F9A] text-[14px] bg-[#F3F4F6] outline-none w-full"
                />
                <Image
                  src="/assets/Icons/Search.svg"
                  alt="Search Icon"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            {/* ---- Box-1 ---- */}
            <div className="flex flex-col h-auto w-full border border-[#EB553D] rounded-xl">
              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#EB553D] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <Image
                    src="/assets/Icons/Search.svg"
                    alt="Search Icon"
                    width={16}
                    height={16}
                  />

                  <div className="text-[14px] font-bold">모의고사</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">고1 모의</div>
                  <div className="text-[14px]">고2 모의</div>
                  <div className="text-[14px]">고3 모의(교육청)</div>
                  <div className="text-[14px]">고3 모의(평가원, 수능)</div>
                </div>
              </div>

              {/* second */}
              <div className="flex flex-row max-md:flex-col items-center w-full min-h-[52px] h-auto border-b  border-[#CFD4DA]">
                <div className=" flex flex-row w-[20%] max-md:w-[100%] min-h-[52px] h-full">
                  <div className="flex flex-row items-center justify-center flex-1 h-full border-r max-md:border-b  border-[#CFD4DA] gap-[6px] bg-[#F3F4F6] px-4">
                    <Image
                      src="/assets/Icons/Search.svg"
                      alt="Search Icon"
                      width={16}
                      height={16}
                    />

                    <div className="text-[14px] font-bold">EBS 교재</div>
                  </div>
                </div>
                <div className="flex flex-col w-full flex-1">
                  <div className="flex w-full max-md:flex-col">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center h-auto border-r border-b border-[#CFD4DA] p-3 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      수능특강, 수능 완성
                    </div>
                    <div className="flex flex-row flex-wrap items-center max-md:justify-center border-b border-[#CFD4DA] h-auto flex-1 p-4 gap-5">
                      <div className="text-[14px]">2026 수특, 수완</div>
                      <div className="text-[14px]">2025 수특, 수완</div>
                      <div className="text-[14px]">2024 수특, 수완</div>
                      <div className="text-[14px]">2023 수특, 수완</div>
                    </div>
                  </div>

                  <div className="flex w-full max-md:flex-col flex-1">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      올림포스
                    </div>
                    <div className="flex flex-row items-center max-md:border-b  max-md:justify-center border-[#CFD4DA] max-md:border-[#EB553D] min-h-[52px] h-auto flex-1 p-4 gap-5">
                      <div className="text-[14px]">올림포스 국어</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center w-full min-h-[52px] h-auto ">
                <div className=" flex flex-row w-[20%] max-md:w-[100%] min-h-[52px] h-full rounded-bl-xl bg-[#F3F4F6]">
                  <div className="flex flex-row items-center justify-center flex-1 h-full border-r max-md:border-b border-[#CFD4DA] gap-[6px] px-4">
                    <Image
                      src="/assets/Icons/Search.svg"
                      alt="Search Icon"
                      width={16}
                      height={16}
                    />

                    <div className="text-[14px] font-bold">교과서</div>
                  </div>
                </div>
                <div className="flex flex-col w-full flex-1">
                  <div className="flex w-full max-md:flex-col">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center h-auto border-r border-b border-[#CFD4DA] p-3 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      2022 공통국어
                    </div>
                    <div className="flex flex-row flex-wrap items-center max-md:justify-center border-b border-[#CFD4DA] h-auto flex-1 p-4 gap-5">
                      <div className="text-[13px]">미래엔</div>
                      <div className="text-[13px]">비상(강)</div>
                      <div className="text-[13px]">비상(박)</div>
                      <div className="text-[13px]">천재(김수)</div>
                      <div className="text-[13px]">천재(김종)</div>
                      <div className="text-[13px]">지학사</div>
                      <div className="text-[13px]">창비</div>
                      <div className="text-[13px]">해냄</div>
                      <div className="text-[13px]">동아</div>
                    </div>
                  </div>

                  <div className="flex w-full max-md:flex-col flex-1">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      2015 문학 교과서
                    </div>
                    <div className="flex flex-row items-center  max-md:justify-center  min-h-[52px] h-auto flex-1 p-4 gap-5">
                      <div className="text-[14px]">문학 목차</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Box-2  */}
            <div className="flex flex-col h-auto w-full border border-[#3abdf1] rounded-xl">
              <div className="flex flex-row max-md:flex-col items-center w-full min-h-[52px] h-auto border-b  border-[#CFD4DA]">
                <div className=" flex flex-row w-[20%] max-md:w-[100%] min-h-[52px]  h-full">
                  <div className="flex flex-row items-center justify-center flex-1 h-full border-r max-md:border-b  rounded-tl-xl border-[#CFD4DA] gap-[6px] bg-[#F3F4F6] px-4">
                    <Image
                      src="/assets/Icons/Search.svg"
                      alt="Search Icon"
                      width={16}
                      height={16}
                    />

                    <div className="text-[14px] font-bold">문학</div>
                  </div>
                </div>
                <div className="flex flex-col w-full flex-1">
                  <div className="flex w-full max-md:flex-col">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center h-auto border-r border-b border-[#CFD4DA] p-3 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      작품 해설
                    </div>
                    <div className="flex flex-row flex-wrap items-center max-md:justify-center border-b max-md:border-[#3abdf1] border-[#CFD4DA] h-auto flex-1 p-4 gap-5">
                      <div className="text-[13px]">작품 해설, 정리+</div>
                      <div className="text-[13px]">기본 작품 해설</div>
                      <div className="text-[13px]">학습 정리</div>
                    </div>
                  </div>

                  <div className="flex w-full max-md:flex-col flex-1">
                    <div className="flex items-center w-[25%] max-md:w-[100%] justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                      문제
                    </div>
                    <div className="flex flex-row items-center max-md:border-b  max-md:justify-center border-[#CFD4DA] max-md:border-[#3abdf1] min-h-[52px] h-auto flex-1 p-4 gap-5">
                      <div className="text-[14px]">기출 문제</div>
                      <div className="text-[14px]">실전 문제1</div>
                      <div className="text-[14px]">실전 문제2</div>
                      <div className="text-[14px]">연관 문제</div>
                      <div className="text-[14px]">예상 문제</div>
                      <div className="text-[14px]">종합 문제</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#3abdf1] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">독서</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">기출 문제</div>
                  <div className="text-[14px]">실전 문제</div>
                  <div className="text-[14px]">지문 해설</div>
                  <div className="text-[14px]">연관 문제</div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#3abdf1] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">화법과 작문</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">기출 문제</div>
                  <div className="text-[14px]">실전 문제</div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#3abdf1] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">언어와 매체</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">기출 문제</div>
                  <div className="text-[14px]">실전 문제</div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#3abdf1] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">문법</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">문법 해설</div>
                  <div className="text-[14px]">문법 분야별 문제</div>
                  <div className="text-[14px]">기출 문제</div>
                  <div className="text-[14px]">실전 문제1</div>
                  <div className="text-[14px]">실전 문제2</div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto border-b max-md:border-[#3abdf1] border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">기출 문제 해설</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">수능, 평가원 기출문제 풀이</div>
                </div>
              </div>

              <div className="flex flex-row max-md:flex-col items-center min-h-[52px] h-auto max-md:border-none  border-[#CFD4DA]">
                <div className="flex flex-row items-center justify-center w-[40%] max-md:w-[100%] max-md:py-4 h-[100%] border-r border-[#CFD4DA] gap-[6px] rounded-tl-xl rounded-bl-xl bg-[#F3F4F6]">
                  <div className="text-[14px] font-bold">학습 자료</div>
                </div>

                <div className="flex flex-row flex-wrap flex-1 p-4 max-md:justify-center max-md:items-center gap-5">
                  <div className="text-[14px]">문학 개념</div>
                  <div className="text-[14px]">문제풀이 해법</div>
                  <div className="text-[14px]">글의 장르</div>
                  <div className="text-[14px]">수사법</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-auto gap-[20px]">
              {/* ---- Top ---- */}
              <div className="flex flex-row max-sm:flex-col max-sm:justify-center items-center justify-between w-full h-auto max-sm:gap-[26px] ">
                <div className="text-[24px] font-bold">고등 국어</div>

                <div className="flex flex-row items-center justify-between w-[325px] max-sm:w-[75%] h-[36px] border rounded-full py-[8px] px-[16px] bg-[#F3F4F6]">
                  <input
                    type="text"
                    placeholder="고등 자료 검색"
                    className="text-[#868F9A] text-[14px] bg-[#F3F4F6] outline-none w-full"
                  />
                  <Image
                    src="/assets/Icons/Search.svg"
                    alt="Search Icon"
                    width={16}
                    height={16}
                  />
                </div>
              </div>

              <div className="flex flex-col h-auto w-full border border-[#CFD4DA] rounded-xl">
                <div className="flex flex-row max-md:flex-col items-center w-full min-h-[52px] h-auto border-[#CFD4DA]">
                  <div className=" flex flex-row w-[20%] max-md:w-[100%] min-h-[52px] h-full">
                    <div className="flex flex-row items-center justify-center flex-1 h-full border-r max-md:border-b  border-[#CFD4DA] gap-[6px] rounded-bl-xl rounded-tl-xl bg-[#F3F4F6] px-4">
                      <div className="text-[14px] font-bold">
                        2022 중학 국어 교과서
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full flex-1">
                    <div className="flex w-full max-md:flex-col">
                      <div className="flex items-center w-[25%] max-md:w-[100%] justify-center h-auto border-r border-b border-[#CFD4DA] p-3 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                        1학년
                      </div>
                      <div className="flex flex-row flex-wrap items-center max-md:justify-center border-b border-[#CFD4DA] h-auto flex-1 p-4 gap-5">
                        <div className="text-[13px]">미(신)</div>
                        <div className="text-[13px]">미(민)</div>
                        <div className="text-[13px]">비(박현)</div>
                        <div className="text-[13px]">비(박영)</div>
                        <div className="text-[13px]">천(정)</div>
                        <div className="text-[13px]">천(노)</div>
                        <div className="text-[13px]">지</div>
                        <div className="text-[13px]">동</div>
                        <div className="text-[13px]">창</div>
                        <div className="text-[13px]">해</div>
                      </div>
                    </div>

                    <div className="flex w-full max-md:flex-col flex-1">
                      <div className="flex items-center w-[25%] max-md:w-[100%] border-b justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                        2학년
                      </div>
                      <div className="flex flex-row items-center border-b  max-md:justify-center border-[#CFD4DA] min-h-[52px] h-auto flex-1 p-4 gap-5">
                        <div className="text-[14px]">2026년 시행</div>
                      </div>
                    </div>

                    <div className="flex w-full max-md:flex-col flex-1">
                      <div className="flex items-center w-[25%] max-md:w-[100%] justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                        3학년
                      </div>
                      <div className="flex flex-row items-center max-md:border-b  max-md:justify-center border-[#CFD4DA] min-h-[52px] h-auto flex-1 p-4 gap-5">
                        <div className="text-[14px]">2027년 시행</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-auto w-full border border-[#CFD4DA] rounded-xl">
                <div className="flex flex-row max-md:flex-col items-center w-full min-h-[52px] h-auto   border-[#CFD4DA]">
                  <div className=" flex flex-row w-[20%] max-md:w-[100%] min-h-[52px] h-full">
                    <div className="flex flex-row items-center justify-center flex-1 h-full border-r max-md:border-b  border-[#CFD4DA] gap-[6px] rounded-bl-xl rounded-tl-xl bg-[#F3F4F6] px-4">
                      <div className="text-[14px] font-bold">
                        2015 중학 국어 교과서
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full flex-1">
                    <div className="flex w-full max-md:flex-col">
                      <div className="flex items-center w-[25%] max-md:w-[100%] justify-center h-auto border-r border-b border-[#CFD4DA] p-3 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                        2학년
                      </div>
                      <div className="flex flex-row flex-wrap items-center max-md:justify-center border-b border-[#CFD4DA] h-auto flex-1 p-4 gap-5">
                        <div className="text-[13px]">미(신)</div>
                        <div className="text-[13px]">기비(김)</div>
                        <div className="text-[13px]">천(노)</div>
                        <div className="text-[13px]">천(박)</div>
                        <div className="text-[13px]">지(이)</div>
                      </div>
                    </div>

                    <div className="flex w-full max-md:flex-col flex-1">
                      <div className="flex items-center w-[25%] max-md:w-[100%] justify-center min-h-[52px] h-auto border-r border-[#CFD4DA] p-4 text-[#868F9A] text-[12px] bg-[#F3F4F6]">
                        3학년
                      </div>
                      <div className="flex flex-row items-center  flex-wrap max-md:justify-center min-h-[52px] h-auto flex-1 p-4 gap-5">
                        <div className="text-[14px]">미(신)</div>
                        <div className="text-[14px]">비(김)</div>
                        <div className="text-[14px]">천(노)</div>
                        <div className="text-[14px]">천(박)</div>
                        <div className="text-[14px]">지(이)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-auto gap-5">
              <div className="flex flex-row max-md:flex-col items-center w-full h-auto gap-5">
                <div className="w-[33.7%] max-md:w-full h-[98px] rounded-xl bg-[#FFEDED]"></div>
                <div className="w-[33.7%] max-md:w-full h-[98px] rounded-xl bg-[#FFEDED]"></div>
                <div className="w-[33.7%]  max-md:w-full h-[98px] rounded-xl bg-[#FFEDED]"></div>
              </div>

              <div className="w-full min-h-[98px] rounded-xl bg-[#FFEDED]"></div>
            </div>
            <div className="flex flex-row max-sm:flex-col  w-full h-auto gap-5">
              <div className="w-[50%] max-md:w-[100%] h-auto gap-[10px]">
                {/* head  */}
                <div className=" mb-3 text-[20px] font-bold">전체글 보기</div>

                {/* box  */}
                <div className="flex flex-col w-full h-auto border  rounded-xl p-4 gap-[10px]">
                  <div className="flex flex-row  gap-4">
                    <div className="flex items-center justify-center   rounded-full py-[3px] px-[8px] gap-2 border border-[#F46F6F] bg-red-50 text-[11px] text-[#F46F6F]">
                      공지
                    </div>
                    <div className="flex items-center justify-center text-[12px] text-[#F46F6F]">
                      국어 교과서 문학작품 예상 문제
                    </div>
                  </div>

                  <div className="flex flex-row   gap-4">
                    <div className="flex items-center justify-center   rounded-full py-[3px] px-[8px] gap-2 border border-[#F46F6F] bg-red-50 text-[11px] text-[#F46F6F]">
                      공지
                    </div>
                    <div className="flex items-center justify-center text-[12px] text-[#F46F6F]">
                      국어 교과서 작품 해설
                    </div>
                  </div>

                  <div className="flex flex-row   gap-4">
                    <div className="flex items-center justify-center  rounded-full py-[3px] px-[8px] gap-2 border border-[#F46F6F] bg-red-50 text-[11px] text-[#F46F6F]">
                      공지
                    </div>
                    <div className="flex items-center justify-center text-[12px] text-[#F46F6F]">
                      2020대비 수능특강 문학작품
                    </div>
                  </div>

                  <div className="flex flex-row   gap-4">
                    <div className="flex items-center justify-center w-[40px] h-[23px] rounded-full py-[3px] px-[8px] gap-2 border border-[#F46F6F] bg-red-50 text-[11px] text-[#F46F6F]">
                      공지
                    </div>
                    <div className="flex items-center justify-center text-[12px] text-[#F46F6F]">
                      연회원 등업 안내
                    </div>
                  </div>

                  <hr className="w-full border-[#CFD4DA]" />

                  <div className="flex flex-row   gap-1">
                    <div className="text-[13px]">한거십팔곡(권호문) 1-19수</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row  gap-1">
                    <div className="text-[13px]">양저설(어유봉)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">매호별곡(조우인)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">
                      아득한 나날(김원우)m 21-11
                    </div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">유씨전(작자 미상)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">
                      희망의 거처(이정록)m 21-11
                    </div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">항구(이용악)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">한거십팔곡(권호문) 1-19수</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">양저설(어유봉)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">매호별곡(조우인)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">
                      아득한 나날(김원우)m 21-11
                    </div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">유씨전(작자 미상)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">
                      희망의 거처(이정록)m 21-11
                    </div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">항구(이용악)m 21-11</div>
                    <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                      N
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">한거십팔곡(권호문) 1-19수</div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">양저설(어유봉)m 21-11</div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">매호별곡(조우인)m 21-11</div>
                  </div>

                  <div className="flex flex-row w-full h-auto gap-1">
                    <div className="text-[13px]">
                      아득한 나날(김원우)m 21-11
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%] h-auto  max-sm:w-[100%] gap-6">
                <div className="flex flex-col w-full h-auto gap-[10px]">
                  {/* head  */}
                  <div className=" text-[20px] font-bold">가입인사</div>

                  {/* box  */}
                  <div className="flex flex-col  w-full h-auto border rounded-xl p-4 gap-[10px]">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row  gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                        <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                          N
                        </div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                        <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                          N
                        </div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">반갑습니다.</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.05</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.04</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.03</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.02</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full h-auto gap-[10px]">
                  {/* head  */}
                  <div className="w-[200px] h-[30px] text-[20px] font-bold">
                    자유로운 글 & 질문
                  </div>

                  {/* box  */}
                  <div className="flex flex-col  w-full h-auto border rounded-xl p-4 gap-[10px]">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                        <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                          N
                        </div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                        <div className="flex items-center  w-[16px] h-[16px] rounded-full p-1 bg-[#ED3D2E] text-[10px] text-white">
                          N
                        </div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.06</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">반갑습니다.</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.05</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.04</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.03</div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row   gap-1">
                        <div className="text-[13px]">안녕하세요</div>
                      </div>

                      <div className="text-[13px] text-[#868F9A]">10.02</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* last */}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
