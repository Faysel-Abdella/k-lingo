"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar2 from "@/components/Sidebar2";
import { Checkbox, Button } from "@nextui-org/react";
import { BulletInBoardT1 } from "@/assets/BulletInBoardT1";
import Image from "next/image";
import InputNoLabel from "@/components/InputNoLable";
import DropDown from "@/components/DropDown";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const BulletInBoard = () => {
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
    <div className="min-h-[100vh] flex flex-col items-center">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-full gap-[10px]">
        {/* SideBar */}
        <Sidebar2 width="w-[25%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start w-[75%]  max-md:w-[100%] h-auto pt-[30px] max-md:pt-[10%] gap-[20px]">
          {/* Top  */}
          <div className="flex flex-col items-center justify-center w-full gap-[12px]">
            <div className="flex flex-col items-start justify-start max-md:justify-center max-md:items-center ml-4 w-full  ">
              <h3 className="text-[14px] text-[#868F9A]">모의고사</h3>

              <h3 className="font-bold text-[24px]">고1 모의</h3>
            </div>
          </div>

          {/* Bottom  */}
          <div className="w-full overflow-x-auto">
            <article className="">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  wrapper: "max-w-[824px] max-h-[1000px]",
                }}
                bottomContent={
                  <div className="flex flex-col items-center justify-center w-full gap-[40px]">
                    {/* Existing Button Container */}
                    <div className="flex flex-row items-center justify-between w-[462px] h-[42px] mb-4">
                      <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[24px] bg-[#42A8FD] text-white flex items-center">
                        <Image
                          src="/assets/Icons/whiteBag.svg"
                          alt="Clip Image"
                          width={20}
                          height={20}
                        />
                        선택파일 장바구니 담기
                      </Button>
                      <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[20px] bg-[#42A8FD] text-white flex items-center">
                        <Image
                          src="/assets/Icons/downloadIcon.svg"
                          alt="Clip Image"
                          width={20}
                          height={20}
                        />
                        선택파일 다운로드
                      </Button>
                    </div>

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
                    <div className="flex flex-row items-center justify-between w-[328px] h-[40px] ">
                      <InputNoLabel
                        placeholder="사미인곡"
                        inputParentStyles="w-[252px] rounded-md  px-[16px] h-[40px] "
                      />

                      {/* Button */}
                      <Button className="w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                        검색
                      </Button>
                    </div>
                  </div>
                }
              >
                <TableHeader className="border-b border-gray-300">
                  <TableColumn className="flex justify-center gap-10 items-center border-gray-300">
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
                    <div className="relative bottom-0.5">
                      <svg
                        width="1"
                        height="25"
                        viewBox="0 0 1 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="1" height="25" fill="#CFD4DA" />
                      </svg>
                    </div>
                  </TableColumn>

                  <TableColumn className="gap-4">
                    <div className="flex items-center justify-center">
                      <span className="w-[55px]">번호</span>
                      <div className="relative bottom-0.5">
                        <svg
                          width="1"
                          height="25"
                          viewBox="0 0 1 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="1" height="25" fill="#CFD4DA" />
                        </svg>
                      </div>
                    </div>
                  </TableColumn>
                  <TableColumn className="">
                    <div className="flex items-center justify-center">
                      <span className="w-[300px]">제목</span>

                      <div className="relative bottom-0.5">
                        <svg
                          width="1"
                          height="25"
                          viewBox="0 0 1 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="1" height="25" fill="#CFD4DA" />
                        </svg>
                      </div>
                    </div>
                  </TableColumn>
                  <TableColumn className="">
                    <div className="flex items-center justify-center">
                      <span className="w-[70px]">작성자</span>

                      <div className="relative bottom-0.5">
                        <svg
                          width="1"
                          height="25"
                          viewBox="0 0 1 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="1" height="25" fill="#CFD4DA" />
                        </svg>
                      </div>
                    </div>
                  </TableColumn>
                  <TableColumn className="">
                    <div className="flex items-center justify-center gap-4">
                      <span className="w-[21px]">쪽수</span>
                      <div className="relative bottom-0.5">
                        <svg
                          width="1"
                          height="25"
                          viewBox="0 0 1 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="1" height="25" fill="#CFD4DA" />
                        </svg>
                      </div>
                    </div>
                  </TableColumn>
                  <TableColumn className="">
                    <div className="flex items-center justify-center gap-12">
                      <span className="w-[21px]">연회원 점수</span>
                      <div className="relative bottom-0.5 ">
                        <svg
                          width="1"
                          height="25"
                          viewBox="0 0 1 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="1" height="25" fill="#CFD4DA" />
                        </svg>
                      </div>
                    </div>
                  </TableColumn>
                  <TableColumn>
                    <span className="w-[21px]">포인트</span>
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
                        <span className="text-[#868F9A] w-[50px]">
                          {row.number}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex w-[430px] items-start justify-start gap-2">
                          <span className="text-[14px]"> {row.title} </span>

                          <Image
                            src="/assets/Icons/Attach.svg"
                            alt="Clip Image"
                            width={16}
                            height={16}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] w-[60px]">
                          {row.author}
                        </span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">{row.numberOfPages}</span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">
                          {row.annualMemberScore}
                        </span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">{row.point}</span>
                      </TableCell>

                      {/* <TableCell>
                                    <Link
                                    href="/admin/membership/membership-management/1"
                                    className="text-mainPurple underline underline-offset-2"
                                    >
                                    {row.viewDetails}
                                    </Link>
                                </TableCell> */}
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

export default BulletInBoard;
