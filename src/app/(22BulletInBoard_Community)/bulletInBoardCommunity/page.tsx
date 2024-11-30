"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar4 from "@/components/Sidebar4";
import { Checkbox, Button } from "@nextui-org/react";
import { BulletInBoardComm } from "@/assets/BulletInBoardCommT1";
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

const BulletInBoardCommunity = () => {
  // const options = [
  //     { key: "1", label: "전체" },
  // ]

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(BulletInBoardComm.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(BulletInBoardComm.slice(start, end));
    return BulletInBoardComm.slice(start, end);
  }, [page, rowsPerPage]);
  // Selection Logic
  // const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  // const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
  //     number[]
  // >([]);

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-between">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex flex-row items-start justify-start w-[75%] max-lg:w-[85%] max-md:w-[100%] h-auto  gap-[20px]">
        {/* SideBar */}
        <Sidebar4 width="w-[25%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start w-[75%] max-md:w-[100%] h-auto pt-[30px] max-md:pt-[10%] max-md:px-[5%] gap-[20px]">
          {/* Top  */}
          <div className="flex flex-row items-center justify-between  w-full min-h-[36px]">
            <div className=" w-full min-h-[34px] ">
              <h3 className=" text-[24px] font-bold">가입인사</h3>
            </div>

            <Button className="min-w-[64px] min-h-[36px] font-bold rounded-md py-[8px] px-[14px] bg-[#E0F1FF] text-[#42A8FD] gap-[10px]">
              글쓰기
            </Button>
          </div>

          {/* Bottom  */}
          <div className="w-full gap-[24px] overflow-x-auto">
            <article className="">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  wrapper: "min-w-full max-h-[1000px]",
                }}
                bottomContent={
                  <div className="flex flex-col items-center justify-center w-full pt-3 gap-[40px]">
                    {/* Existing Button Container */}
                    {/* <div className="flex flex-row items-center justify-between w-[462px] h-[42px] mb-4">
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
                                        </div> */}

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
                    {/* <div className="flex flex-row items-center justify-between w-[328px] h-[40px] ">
                                            <InputNoLabel
                                                placeholder="사미인곡"
                                                inputParentStyles="w-[252px] rounded-md  px-[16px] h-[40px] "
                                            />

                                            {/* Button */}
                    {/* <Button className="w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                                                검색
                                            </Button> */}
                    {/* </div> */}
                  </div>
                }
              >
                <TableHeader className="border-b border-gray-300">
                  {/* <TableColumn className="flex justify-center gap-10 items-center border-gray-300">
                                        <Checkbox
                                            onClick={() => {
                                                if (allListCheckedPageNumbers.includes(page)) {
                                                    setAllListCheckedPageNumbers(
                                                        allListCheckedPageNumbers.filter((number) => number !== page)
                                                    );
                                                    setClickedRowIds(
                                                        clickedRowIds.filter(
                                                            (id) => !currentData.map((item: any) => item.number).includes(id)
                                                        )
                                                    );
                                                } else {
                                                    setClickedRowIds([
                                                        ...clickedRowIds,
                                                        ...currentData.map((item: any) => item.number),
                                                    ]);
                                                    setAllListCheckedPageNumbers([...allListCheckedPageNumbers, page]);
                                                }
                                            }}
                                            className="size-[14px] rounded-[2px] bg-transparent"
                                            isSelected={allListCheckedPageNumbers.includes(page)}
                                        />
                                        <div className="relative bottom-0.5">
                                            <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="1" height="25" fill="#CFD4DA" />
                                            </svg>
                                        </div>

                                    </TableColumn> */}

                  <TableColumn className="gap-4">
                    <div className="flex items-center justify-center">
                      <span className="">번호</span>
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
                      <span className="">제목</span>

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
                      <span className="">작성자</span>

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
                      <span className="">날짜</span>
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
                  <TableColumn>
                    <span className="">조회수</span>
                  </TableColumn>
                </TableHeader>

                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      {/* <TableCell>
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
                                            </TableCell> */}
                      <TableCell>
                        <span className="text-[#868F9A] w-[50px]">
                          {row.number}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex  items-start justify-start gap-2">
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
                        <span className="w-[21px]">{row.date}</span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">{row.views}</span>
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

export default BulletInBoardCommunity;
