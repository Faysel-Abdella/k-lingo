"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { PaymentData } from "@/assets/paymentDataT1";
import React from "react";
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

const PaymentDetails = () => {
  const {
    isOpen: isRefundBtn,
    onOpen: onRefundBtn,
    onOpenChange: onRefundBtnChange,
  } = useDisclosure();

  const {
    isOpen: isHistoryBtn,
    onOpen: onHistoryBtn,
    onOpenChange: onHistoryBtnChange,
  } = useDisclosure();

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(PaymentData.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(PaymentData.slice(start, end));
    return PaymentData.slice(start, end);
  }, [page, rowsPerPage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-full min-h-[1121px] gap-[10px] mt-10 mb-80 flex-1">
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
        <div className="w-[75%]">
          <div className="flex flex-col items-center justify-center w-full max-h-[192px] gap-[12px]">
            <div className="flex flex-row items-start justify-between w-full">
              <h3 className="text-[20px] font-bold">연회원 이용권</h3>
            </div>

            <div className="w-full">
              <Card className="w-full min-h-[152px] border shadow-none">
                <CardBody className="flex w-full flex-col p-[20px] gap-[10px]">
                  <div className="flex flex-row items-start max-sm:flex-col flex-wrap justify-between w-full">
                    <div className="text-[16px] flex flex-row flex-wrap gap-4">
                      <span className="font-bold">고등 연회원</span>
                      <span className="text-[14px] text-[#8D64F8]">
                        2024.10.01 ~ 2025.09.30 (00일 남음)
                      </span>
                    </div>
                    <button
                      className="text-[12px] text-[#868F9A]"
                      onClick={onRefundBtn}
                    >
                      {" "}
                      환불하기
                    </button>
                  </div>

                  <div className="flex flex-col  gap-[5px] md:w-[20%]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="text-[14px]">사용한 점수</div>
                      <div className="text-[14px]">10점</div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="text-[14px]">남은 점수</div>
                      <div className="text-[14px]">1990점</div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full overflow-hidden">
                      <div className="flex flex-row items-center text-[14px] text-[#868F9A] gap-1">
                        누적 포인트
                        <Tooltip
                          placement="bottom-start"
                          content={
                            <Card>
                              <CardBody className="p-2">
                                <p className="text-sm max-w-[400px]">
                                  이용하는 도중에 환불할 경우에는 이용한 자료의
                                  포인트만큼 차감하고 환불하므로 개별 구매한
                                  것과 동일한 결과가 됩니다. 환불은 결제일로부터
                                  1개월 이내에 가능합니다.
                                </p>
                              </CardBody>
                            </Card>
                          }
                        >
                          <Image
                            src="/assets/Icons/questionMark.svg"
                            alt="Question Mark Icon"
                            className="cursor-pointer"
                            width={14}
                            height={14}
                          />
                        </Tooltip>
                      </div>
                      <div className="text-[14px] text-[#868F9A]">2000P</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* ----- ---- --- MIIDLE-2  --- ----- ------ */}
          <div className="flex flex-col items-center justify-center w-full min-h-[110px] gap-[12px] mt-10">
            <div className="flex flex-row items-start justify-between w-full">
              <h3 className="text-[20px] font-bold">무료 포인트</h3>
            </div>

            <div className="w-full">
              <Card className="flex flex-col p-[20px] gap-[10px] w-full  min-h-[70px] border shadow-none">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="text-[16px] flex flex-row gap-4">
                    <span className="font-bold">1,000 P</span>
                  </div>
                  <button
                    className="text-[12px] text-[#868F9A]"
                    onClick={onHistoryBtn}
                  >
                    {" "}
                    내역보기
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* ----- ---- --- BOTTOM  --- ----- ------*/}
          <div className="flex flex-col items-center justify-center w-full min-h-[582px] mt-5 gap-[12px]">
            <div className="flex flex-row items-start justify-between w-full">
              <h1 className="text-[20px] font-bold">결제 내역</h1>
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
                    td: [
                      "px-6 text-center font-normal text-base text-[#363941]",
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
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />

      {/* Modal For Refund*/}

      <Modal
        isOpen={isRefundBtn}
        placement="center"
        onOpenChange={onRefundBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[345px] px-10 flex justify-center items-center "],
          body: ["w-full p-0 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="mt-5 py-3 text-center text-[20px] font-bold text-mainBlack">
                    환불 신청
                  </h2>
                </div>

                <div className="mt-3">
                  <p className="text-[#868F9A] text-center">
                    -이용한 자료의 포인트만큼 차감하고 환불됩니다.
                  </p>
                  <p className="text-[#868F9A] text-center">
                    -신청 후 2~3일 정도 소요될 수 있습니다.
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <Button
                    className="rounded-[10px] bg-[#ECEDF1] text-[#868F9A] px-4 py-[12px] text-base font-bold  "
                    onClick={() => {
                      onRefundBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className="rounded-[10px] bg-[#E0F1FF] text-[#ED3D2E] px-4 py-[12px] text-base font-bold "
                    onClick={() => {
                      onRefundBtnChange();
                    }}
                  >
                    환불 신청
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal For vie history*/}

      <Modal
        isOpen={isHistoryBtn}
        placement="center"
        onOpenChange={onHistoryBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[345px] px-10 pt-5 flex justify-center items-center "],
          body: ["w-full p-0 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#868F9A]">2024.10.02 13:00</p>
                      <p className="text-[#353A46]">관리자 제공</p>
                    </div>
                    <p className="text-[#42A8FD] font-bold">+ 100원</p>
                  </div>

                  <hr className="border-t-[1px] border-[#CFD4DA]" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#868F9A]">2024.10.02 13:00</p>
                      <p className="text-[#353A46]">관리자 제공</p>
                    </div>
                    <p className="text-[#42A8FD] font-bold">+ 100원</p>
                  </div>

                  <hr className="border-t-[1px] border-[#CFD4DA]" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#868F9A]">2024.09.28 13:00</p>
                      <p className="text-[#353A46]">자료 구매</p>
                    </div>
                    <p className="text-[#ED3D2E] font-bold">- 1,000원</p>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <Button
                    className="rounded-[10px] bg-[#ECEDF1] text-[#868F9A] px-4 py-[12px] text-base font-bold  "
                    onClick={() => {
                      onHistoryBtnChange();
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

export default PaymentDetails;
