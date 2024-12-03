"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar5 from "@/components/Sidebar5";
import { announcementT1 } from "@/assets/announcementTable";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const Announcement = () => {
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(announcementT1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(announcementT1.slice(start, end));
    return announcementT1.slice(start, end);
  }, [page, rowsPerPage]);

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between ">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[10px]">
        {/* SideBar */}
        <Sidebar5 width={"w-[25%] max-md:w-[30%] max-sm:w-[50%]"} />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] h-auto pt-[30px] max-md:pt-[100px] gap-[20px]">
          {/* Top  */}
          <div className="w-full min-h-[34px] ">
            <h3 className=" text-[24px] font-bold">공지사항</h3>
          </div>

          {/* Bottom  */}
          <div className="max-md:w-full max-md:overflow-x-scroll gap-[24px]">
            <article className="w-full">
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
                  <TableColumn className="">제목</TableColumn>
                  <TableColumn className="">작성자</TableColumn>
                  <TableColumn className="">날짜</TableColumn>
                </TableHeader>

                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell>
                        <span className="text-[#868F9A] ">{row.number}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-[14px] text-nowrap">
                          {" "}
                          {row.title}{" "}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] text-nowrap">
                          {row.author}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span>{row.date}</span>
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

export default Announcement;
