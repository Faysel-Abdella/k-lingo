"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { PaymentData } from "@/assets/paymentDataT1";
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

  const pages = Math.ceil(PaymentData.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(PaymentData.slice(start, end));
    return PaymentData.slice(start, end);
  }, [page, rowsPerPage]);

  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-full min-h-[1121px] gap-[10px] mt-10 mb-96 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          마이페이지
        </h2>

        {/* ----- ---- --- TOP  --- ----- ------*/}
        <div className="flex flex-cols items-center justify-center w-full max-md:w-full min-h-[108px]">
          <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
            {/* Inner content container */}
            <div className="flex w-[45%] max-md:w-[75%] flex-row items-center justify-between gap-[20px]">
              <div className="text-[#868F9A]  pb-3 font-bold">내 정보 관리</div>
              <div className="border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">
                이용권 및 결제 내역
              </div>
              <div className="text-[#868F9A] pb-3 font-bold">다운로드 내역</div>
              <div className="text-[#868F9A] pb-3 font-bold">나의 활동</div>
            </div>
          </div>
        </div>

        {/* ----- ---- --- MIDDLE  --- ----- ------*/}

        <div className="flex flex-col items-center justify-center w-[75%] min-h-[192px] gap-[12px]">
          <div className="flex flex-row items-start justify-between w-full">
            <h3 className="text-[20px] font-bold">연회원 이용권</h3>
          </div>

          <div className="w-full">
            <Card className="w-full min-h-[152px] border shadow-none">
              <CardBody className="flex flex-col items-center justify-center py-[60px] px-[24px] gap-[12px]">
                <p className="text-[16px] text-[#868F9A]">이용권이 없습니다</p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* ----- ---- --- MIIDLE-2  --- ----- ------ */}
        <div className="flex flex-col items-center justify-center w-[75%] min-h-[110px] gap-[12px] mt-10">
          <div className="flex flex-row items-start justify-between w-full">
            <h3 className="text-[20px] font-bold">무료 포인트</h3>
          </div>

          <div className="w-full">
            <Card className="flex flex-col p-[20px] gap-[10px] w-full min-h-[70px] border shadow-none">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="text-[16px] flex flex-row gap-4">
                  <span className="font-bold">1,000 P</span>
                </div>
                <div className="text-[12px] text-[#868F9A]"> 내역보기</div>
              </div>
            </Card>
          </div>
        </div>

        {/* ----- ---- --- BOTTOM  --- ----- ------*/}
        <div className="flex flex-col items-center justify-center w-[75%] mt-5 min-h-[582px] gap-[8px]">
          <div className="flex flex-row items-start justify-between w-full">
            <h3 className="text-[20px] font-bold">연회원 이용권</h3>
          </div>

          <div className="w-full min-h-[484px] overflow-x-scroll">
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
                  <TableColumn>내용</TableColumn>
                  <TableColumn>결제일</TableColumn>
                  <TableColumn>결제 금액</TableColumn>
                  <TableColumn>결제 수단</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell>{row.detail}</TableCell>
                      <TableCell>{row.paymentDate}</TableCell>
                      <TableCell>{row.paymentAmount}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
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
