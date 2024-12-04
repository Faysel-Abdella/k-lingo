"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { ActivityInquiryTable } from "@/assets/actiivityInquiryT1";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

const ActivityInquiry = () => {
  const {
    isOpen: isAnsweredBtn,
    onOpen: onAnsweredBtn,
    onOpenChange: onAnsweredBtnChange,
  } = useDisclosure();

  const {
    isOpen: isUnAnsweredBtn,
    onOpen: onUnAnsweredBtn,
    onOpenChange: onUnAnsweredBtnChange,
  } = useDisclosure();

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(ActivityInquiryTable.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(ActivityInquiryTable.slice(start, end));
    return ActivityInquiryTable.slice(start, end);
  }, [page, rowsPerPage]);
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-full min-h-[293px] gap-[10px] mt-10 mb-96 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          마이페이지
        </h2>

        {/* ----- ---- --- TOP  --- ----- ------*/}
        <div className="flex flex-cols items-center justify-center w-full min-h-[108px]">
          <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
            {/* Inner content container */}
            <div className="flex w-[45%] max-md:w-[75%] flex-row items-center justify-between gap-[20px]">
              <div className="text-[#868F9A]  pb-3 font-bold">내 정보 관리</div>
              <div className="text-[#868F9A] pb-3 font-bold">
                이용권 및 결제 내역
              </div>
              <div className="text-[#868F9A] pb-3 font-bold">다운로드 내역</div>
              <div className=" border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">
                나의 활동
              </div>
            </div>
          </div>
        </div>

        {/* ----- ---- --- BOTTOM  --- ----- ------*/}
        <div className="flex flex-col items-center justify-center w-full min-h-[817px] gap-[24px]">
          <div className="flex flex-row items-center justify-center w-full min-h-[40px] gap-[12px]">
            <div className=" border font-bold border-[#868F9A]  text-[#868F9A] px-[12px] py-[10px] text-[14px] rounded-full">
              나의 게시글
            </div>
            <div className=" border ont-bold border-[#42A8FD] bg-blue-100 font-bold text-[#42A8FD]  px-[12px] py-[10px] text-[14px] rounded-full">
              1:1 문의
            </div>
          </div>

          <div className="flex flex-col w-[75%] min-h-[695px] gap-[5px]">
            <div className="w-full h-[42px] flex flex-row items-center justify-between">
              <h2 className="text-[20px] font-bold">문의 내역</h2>
              <Link href="/contact-us">
                <Button className="w-[76px] h-[42px] py-[8px] px-[14px] bg-[#E0F1FF] text-[#42A8FD]">
                  문의하기
                </Button>
              </Link>
            </div>
            <article className="m-0 w-full max-md:overflow-x-scroll">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative px-[40px] w-[1080px] h-[41px] py-[12px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] h-[44px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: [
                    "px-6 text-[14px] text-center font-normal text-base text-[#363941]",
                  ],
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
                  <TableColumn>제목</TableColumn>
                  <TableColumn>작성일</TableColumn>
                  <TableColumn>상태</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((row, index) => (
                    <TableRow key={row.id} className="border-b-1">
                      <TableCell className="text-nowrap">
                        {index === 0 ? "추가 결제는 없나요?" : row.title}
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A]">
                          {index === 0 ? "2024.11.05" : row.creationDate}
                        </span>
                      </TableCell>
                      <TableCell>
                        <button
                          className={
                            index === 0
                              ? "text-black font-medium"
                              : "text-[#8D64F8]"
                          }
                          onClick={
                            index === 0 ? onUnAnsweredBtn : onAnsweredBtn
                          }
                        >
                          {index === 0 ? "대기중" : row.situation}
                        </button>
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

      {/* Modal For answered */}

      <Modal
        isOpen={isAnsweredBtn}
        placement="center"
        onOpenChange={onAnsweredBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[60%] px-6 pt-4 flex  "],
          body: [" p-0 flex "],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="text-[#353A46] font-bold text-lg">
                  재다운로드 관련 문의드려요
                </h3>

                <p className=" text-[#868F9A] text-sm">
                  YYYY-MM-DD HH:MM <span>대기중</span>
                </p>

                <hr className="w-full border-t-1 border-[#CFD4DA]   " />

                <p className="text-[#353A46]">
                  재다운로드 가능 횟수는 몇 번인가요?
                </p>

                <div className="mt-10 bg-[#F3F4F6] p-5 rounded-xl">
                  <h3 className="text-[#353A46] font-bold text-lg">답변</h3>

                  <p className="mt-1 text-sm text-[#353A46]">
                    안녕하세요. 자유로국어입니다. 답변 텍스트 영역입니다.
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <Button
                    className="rounded-[10px] bg-[#ECEDF1] text-[#868F9A] px-4 py-[12px] text-base font-bold"
                    onClick={() => {
                      onAnsweredBtnChange();
                    }}
                  >
                    닫기
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal For non answered */}

      <Modal
        isOpen={isUnAnsweredBtn}
        placement="center"
        onOpenChange={onUnAnsweredBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[60%] px-6 pt-4 flex  "],
          body: [" p-0 flex "],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="text-[#353A46] font-bold text-lg">
                  재다운로드 관련 문의드려요
                </h3>

                <p className=" text-[#868F9A] text-sm">
                  YYYY-MM-DD HH:MM <span>대기중</span>
                </p>

                <hr className="w-full border-t-1 border-[#CFD4DA]   " />

                <p className="text-[#353A46]">
                  재다운로드 가능 횟수는 몇 번인가요?
                </p>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <Button
                    className="rounded-[10px] bg-[#ECEDF1] text-[#868F9A] px-4 py-[12px] text-base font-bold"
                    onClick={() => {
                      onAnsweredBtnChange();
                    }}
                  >
                    닫기
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ActivityInquiry;
