// eslint-disable react-hooks/exhaustive-deps

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { DownloadHistory } from "@/assets/downloadHistoryT1";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const TicketAndPaymentDetails = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(DownloadHistory.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(DownloadHistory.slice(start, end));
    return DownloadHistory.slice(start, end);
  }, [page, rowsPerPage]);
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}

      <div className="flex flex-col items-center justify-start w-full min-h-[1121px] gap-[40px] mt-10 mb-96 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          마이페이지
        </h2>

        {/* ----- ---- --- TOP  --- ----- ------*/}
        <div className="flex flex-cols items-center justify-center w-full  max-md:w-full">
          <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
            {/* Inner content container */}
            <div className="flex w-[45%]  max-md:w-[75%] flex-row items-center justify-between gap-[20px]">
              <div className="text-#868F9A]  pb-3 font-bold">내 정보 관리</div>
              <div className="text-[#868F9A] pb-3 font-bold">
                이용권 및 결제 내역
              </div>
              <div className=" border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">
                다운로드 내역
              </div>
              <div className="text-[#868F9A] pb-3 font-bold">나의 활동</div>
            </div>
          </div>
        </div>

        {/* ----- ---- --- BOTTOM  --- ----- ------*/}
        <div className="flex flex-col items-center justify-center w-[75%] min-h-[582px] gap-[8px]">
          <div className="flex flex-row items-start justify-between w-full">
            <h3 className="text-[20px] font-bold">연회원 이용권</h3>
          </div>

          <div className="w-full min-h-[484px]">
            <article className="m-0">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] h-[44px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: ["px-6 text-center font-normal text-base text-[#363941]"],
                }}
                bottomContent={
                  <div className="flex w-full justify-center mt-8">
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
                <TableHeader>
                  <TableColumn>번호</TableColumn>
                  <TableColumn>제목</TableColumn>
                  <TableColumn>작성자</TableColumn>
                  <TableColumn>쪽수</TableColumn>
                  <TableColumn>연회원 점수</TableColumn>
                  <TableColumn>포인트</TableColumn>
                  <TableColumn>재다운로드</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell>{row.number}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <span>{row.title}</span>
                          <Image
                            src="/assets/Icons/Attach.svg"
                            alt="Clip Image"
                            width={12}
                            height={12}
                          />
                        </div>
                      </TableCell>
                      <TableCell>{row.author}</TableCell>
                      <TableCell>{row.numberOfPages}</TableCell>
                      <TableCell>{row.annualMemberScore}</TableCell>
                      <TableCell>{row.point}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-[#42A8FD]">
                            {row.reDownload}
                          </span>
                          <span className="text-[10px] text-[#868F9A]">
                            {" "}
                            (~10.30){" "}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </article>
          </div>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default TicketAndPaymentDetails;
