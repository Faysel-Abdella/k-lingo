"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar2 from "@/components/Sidebar2";
import { Checkbox, Button } from "@nextui-org/react";
import { BulletInBoardT1 } from "@/assets/BulletInBoardT1";
import Image from "next/image";
import InputNoLabel from "@/components/InputNoLable";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const BulletInBoardAdmin = () => {
  const options = [{ key: "1", label: "전체" }];

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 12;

  const pages = Math.ceil(BulletInBoardT1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(BulletInBoardT1.slice(start, end));
    return BulletInBoardT1.slice(start, end);
  }, [page, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between ">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[10px]">
        {/* SideBar */}
        <Sidebar2 width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] h-auto pt-[30px] max-md:pt-[100px] gap-[20px]">
          {/* Top  */}
          <div className="flex flex-col items-center justify-center w-full min-h-[54px]">
            <div className="flex flex-col items-start justify-start ml-4 w-full min-h-[54px] ">
              <div className="w-full ">
                <h3 className=" text-[14px] text-[#868F9A]">모의고사</h3>
              </div>

              <div className="w-full min-h-[34px] ">
                <h3 className="font-bold text-[24px]">고1 모의</h3>
              </div>
            </div>
          </div>

          {/* Bottom  */}
          <div className="w-full gap-[20px]">
            <div className="flex flex-row flex-wrap items-center justify-between w-full min-h-[36px]">
              <div className="flex flex-row flex-1 flex-wrap items-center justify-start pl-3 min-h-[36px] gap-[8px]">
                <Button className=" min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A] flex items-center">
                  선택 게시글 삭제
                </Button>

                <Button className=" min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A] flex items-center">
                  선택 게시글 이동
                </Button>
              </div>

              <Button className="w-[64px] min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#E0F1FF] text-[#42A8FD] flex items-center">
                글쓰기
              </Button>
            </div>

            <div className="max-md:w-full max-md:overflow-x-scroll gap-[24px]">
              <article>
                <Table
                  aria-label="Data Table"
                  shadow="none"
                  classNames={{
                    th: [
                      "relative  py-[10px]  font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A]  h-[41px] text-center",
                      "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                    ],
                    td: [
                      "py-[10px]  h-[40px] px-5 text-[14px] text-center font-normal text-base text-[#363941] ",
                    ],
                  }}
                  bottomContent={
                    <div className="flex flex-col items-center justify-center pt-2 w-full gap-[40px]">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />

                      {/* Input and Button Row */}
                      <div className="flex flex-row items-center justify-between w-[50%] min-h-[40px] ">
                        <InputNoLabel
                          placeholder="사미인곡"
                          inputParentStyles="w-full rounded-md  px-[16px] min-h-[40px] "
                          mainStyles="w-full"
                        />

                        {/* Button */}
                        <Button className="min-w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                          검색
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <TableHeader className="border-b border-gray-300">
                    <TableColumn className="flex justify-center items-center px-8">
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
                        className="size-[14px] rounded-[2px] bg-transparent"
                        isSelected={allListCheckedPageNumbers.includes(page)}
                      />
                    </TableColumn>

                    <TableColumn>번호</TableColumn>
                    <TableColumn>제목</TableColumn>
                    <TableColumn>작성자</TableColumn>
                    <TableColumn>쪽수</TableColumn>
                    <TableColumn>연회원 점수</TableColumn>
                    <TableColumn>포인트</TableColumn>
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
                                  clickedRowIds.filter(
                                    (id) => id !== row.number
                                  )
                                );
                              } else {
                                setClickedRowIds([
                                  ...clickedRowIds,
                                  row.number,
                                ]);
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
                            <span className="text-[14px] text-nowrap">
                              {" "}
                              {row.title}{" "}
                            </span>

                            <Image
                              src="/assets/Icons/Attach.svg"
                              alt="Clip Image"
                              width={16}
                              height={16}
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BulletInBoardAdmin;
