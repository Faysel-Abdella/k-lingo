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

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-between">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex flex-row items-start justify-start w-[75%] max-lg:w-[85%] max-md:w-[100%] h-auto  gap-[20px]">
        {/* SideBar */}
        <Sidebar4 width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

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
          <div className=" gap-[24px] max-md:w-full max-md:overflow-x-auto">
            <article className="">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative  py-[10px]  font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] w-full h-[41px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: [
                    "py-[10px] w-full h-[40px] px-5 text-[14px] text-center font-normal text-base text-[#363941] ",
                  ],
                }}
                bottomContent={
                  <div className="flex flex-col items-center justify-center w-full pt-3 gap-[40px]">
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
                }
              >
                <TableHeader className="border-b border-gray-300">
                  <TableColumn className="gap-4">번호</TableColumn>
                  <TableColumn>제목</TableColumn>
                  <TableColumn>작성자</TableColumn>
                  <TableColumn>날짜</TableColumn>
                  <TableColumn>조회수</TableColumn>
                </TableHeader>

                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
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
                        <span>{row.date}</span>
                      </TableCell>
                      <TableCell>
                        <span>{row.views}</span>
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

export default BulletInBoardCommunity;
