"use client";

import { useState, useMemo } from "react";
import Header3 from "@/components/Header3";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Checkbox, Button } from "@nextui-org/react";
import { HigherKorean } from "@/assets/HigherSchoolMaterialT2";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const HighSchoolMaterials = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(HigherKorean.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(HigherKorean.slice(start, end));
    return HigherKorean.slice(start, end);
  }, [page, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <div className="min-h-[100vh] flex flex-col items-center">
      <Header3 />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-full gap-[10px]">
        {/* SideBar */}
        <Sidebar width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start w-[75%] max-md:w-[100%] h-auto py-[60px] gap-[40px]">
          {/* Top  */}
          <div className="flex flex-col items-center justify-start w-full gap-[12px]">
            <div className="flex flex-col items-center justify-center min-h-[34px] ">
              <h3 className="font-bold text-[24px]">
                {" "}
                고등국어(교과서 자료){" "}
                <span className="font-normal text-[16px] text-[#868F9A]">
                  (2022 개정)
                </span>
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center border w-[60%] max-md:w-[85%]">
              {/* A row  */}
              <div className="w-full min-h-[44px] border-b border-[#CFD4DA] flex flex-row items-start bg-[#F3F4F6] justify-start">
                <div className="flex  flex-row items-center min-h-[44px] justify-center w-[20%] h-auto border-[#CFD4DA] gap-[4px]">
                  <div className="flex px-[12px] w-full h-full flex-1 flex-row items-center justify-between gap-1">
                    <p className=" text-[10px] text-[#868F9A]">종류 </p>
                    <Checkbox size="sm" />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap h-auto items-start justify-start flex-1 min-h-[44px] p-[8px] bg-white gap-[4px]">
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 1-1
                  </p>
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 1-2
                  </p>
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 2-1
                  </p>
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 2-2
                  </p>
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 3-1
                  </p>
                  <p className="text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    중 3-2
                  </p>
                </div>
              </div>
              {/* A row  */}
              <div className="w-full min-h-[44px] border-b border-[#CFD4DA] flex flex-row items-start bg-[#F3F4F6] justify-start">
                <div className="flex  flex-row items-center min-h-[44px] justify-center w-[20%] h-auto border-[#CFD4DA] gap-[4px]">
                  <div className="flex px-[12px] w-full h-full flex-1 flex-row items-center justify-between gap-1">
                    <p className=" text-[10px] text-[#868F9A]">제작사 </p>
                    <Checkbox size="sm" />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap h-auto items-start justify-start flex-1 min-h-[44px] p-[8px] bg-white gap-[4px]">
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    미래엔
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    비상(강)
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    비상(박)
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    천재(김수)
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    천재(김종)
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    지학사
                  </p>
                </div>
              </div>
              {/* A row  */}
              <div className="w-full min-h-[44px] border-b border-[#CFD4DA] flex flex-row items-start bg-[#F3F4F6] justify-start">
                <div className="flex  flex-row items-center min-h-[44px] justify-center w-[20%] h-auto border-[#CFD4DA] gap-[4px]">
                  <div className="flex px-[12px] w-full h-full flex-1 flex-row items-center justify-between gap-1">
                    <p className=" text-[10px] text-[#868F9A]">단원 </p>
                    <Checkbox size="sm" />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap h-auto items-start justify-start flex-1 min-h-[44px] p-[8px] bg-white gap-[4px]">
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    1단원
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    2단원
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    3단원
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    4단원
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    5단원
                  </p>
                </div>
              </div>
              {/* A row  */}
              <div className="w-full min-h-[44px] border-b border-[#CFD4DA] flex flex-row items-start bg-[#F3F4F6] justify-start">
                <div className="flex  flex-row items-center min-h-[44px] justify-center w-[20%] h-auto border-[#CFD4DA] gap-[4px]">
                  <div className="flex px-[12px] w-full h-full flex-1 flex-row items-center justify-between gap-1">
                    <p className=" text-[10px] text-[#868F9A]">유형 </p>
                    <Checkbox size="sm" />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap h-auto items-start justify-start flex-1 min-h-[44px] p-[8px] bg-white gap-[4px]">
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    해설・정리
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    객관식
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    서술형
                  </p>
                  <p className="text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]">
                    학습지
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom  */}
          <div className="max-md:w-full max-md:overflow-x-scroll gap-[24px]">
            <article className="">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative  py-[10px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] w-full h-[41px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: [
                    "py-[10px] w-full h-[40px] px-5  text-[14px] text-center font-normal text-base text-[#363941] ",
                  ],
                }}
                bottomContent={
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-center">
                      <div className="flex flex-row items-center gap-5 w-[462px] h-[42px] mb-4">
                        <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[24px] bg-[#42A8FD] text-white">
                          <Image
                            src="/assets/Icons/whiteBag.svg"
                            alt="Clip Image"
                            width={20}
                            height={20}
                          />
                          선택파일 장바구니 담기
                        </Button>
                        <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[20px] bg-[#42A8FD] text-white">
                          <Image
                            src="/assets/Icons/downloadIcon.svg"
                            alt="Clip Image"
                            width={20}
                            height={20}
                          />
                          선택파일 다운로드
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center w-full">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  </div>
                }
              >
                <TableHeader>
                  <TableColumn className="flex justify-center items-center px-0">
                    <Checkbox
                      onClick={() => {
                        if (allListCheckedPageNumbers.includes(page)) {
                          setAllListCheckedPageNumbers(
                            allListCheckedPageNumbers.filter(
                              (number) => number !== page
                            )
                          );
                          setClickedRowIds(
                            clickedRowIds.filter(
                              (id) =>
                                !currentData
                                  .map((item: any) => item.number)
                                  .includes(id)
                            )
                          );
                        } else {
                          setClickedRowIds([
                            ...clickedRowIds,
                            ...currentData.map((item: any) => item.number),
                          ]);
                          setAllListCheckedPageNumbers([
                            ...allListCheckedPageNumbers,
                            page,
                          ]);
                        }
                      }}
                      className={`size-[14px] rounded-[2px] bg-transparent`}
                      isSelected={allListCheckedPageNumbers.includes(page)}
                    ></Checkbox>
                  </TableColumn>

                  <TableColumn>
                    <span>번호</span>
                  </TableColumn>
                  <TableColumn>
                    <span>제목</span>
                  </TableColumn>
                  <TableColumn>
                    <span>작성자</span>
                  </TableColumn>
                  <TableColumn>
                    <span>쪽수</span>
                  </TableColumn>
                  <TableColumn>
                    <span>연회원 점수</span>
                  </TableColumn>
                  <TableColumn>
                    <span>포인트</span>
                  </TableColumn>
                  <TableColumn>
                    <span>게시판</span>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell>
                        <Checkbox
                          className={`text-center size-[14px] rounded-[2px]`}
                          onClick={() => {
                            if (clickedRowIds.includes(row.number)) {
                              setClickedRowIds(
                                clickedRowIds.filter((id) => id !== row.number)
                              );
                            } else {
                              setClickedRowIds([...clickedRowIds, row.number]);
                            }
                          }}
                          isSelected={clickedRowIds.includes(row.number)}
                        ></Checkbox>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] ">{row.number}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex  items-start justify-start gap-2">
                          <span className="text-nowrap">{row.title}</span>
                          <Image
                            src="/assets/Icons/Attach.svg"
                            alt="Clip Image"
                            width={12}
                            height={12}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] text-nowrap">
                          {row.author}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span>{row.numberOfPages}</span>
                      </TableCell>
                      <TableCell>
                        <span>{row.annualMemberScore}</span>
                      </TableCell>
                      <TableCell>
                        <span>{row.point}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] text-nowrap">
                          {row.noticeBoard}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HighSchoolMaterials;
