"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { ActivityTable } from "@/assets/activityTable";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
} from "@nextui-org/react";

const MyActivities = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(ActivityTable.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(ActivityTable.slice(start, end));
    return ActivityTable.slice(start, end);
  }, [page, rowsPerPage]);
  // // Selection Logic
  // const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  // const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
  //   number[]
  // >([]);

  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-full min-h-[293px] gap-[10px] mt-10 mb-96 flex-1">
        <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">
          마이페이지
        </h2>

        {/* ----- ---- --- TOP  --- ----- ------*/}
        <div className="flex flex-cols items-center justify-center w-full min-h-[100px]">
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
        <div className="flex flex-col items-center justify-center w-[75%] min-h-[763px] gap-[4px]">
          <div className="flex flex-row items-center justify-center w-full gap-[12px]">
            <div className=" border border-[#42A8FD] bg-blue-100 font-bold text-[#42A8FD] px-[12px] py-[10px] text-[14px] rounded-full">
              나의 게시글
            </div>
            <div className=" border border-[#868F9A]  text-[#868F9A] px-[12px] py-[10px] text-[14px] font-bold rounded-full">
              1:1 문의
            </div>
          </div>

          <div className="w-full min-h-[641px]">
            <article className="mt-5">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative px-[40px] py-[12px] font-bold text-[12px] bg-[#F3F4F6] text-[#868F9A] h-[41px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: [
                    "py-[10px] px-[40px] text-[14px]  text-center font-normal text-base text-[#363941] ",
                  ],
                }}
                bottomContent={
                  <div className="flex flex-col w-full">
                    {/* <div className="flex justify-end w-full mb-1">
                          <Button className="w-[56px] h-[36px] rounded-md py-[8px] px-[16px] bg-[#353A46] text-white">
                            삭제
                          </Button>
                        </div> */}

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
                  {/* <TableColumn className="flex justify-center items-center"> */}
                  {/* <Checkbox
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
                        ></Checkbox> */}
                  {/* </TableColumn> */}

                  <TableColumn>제목</TableColumn>
                  <TableColumn>게시판</TableColumn>
                  <TableColumn>작성일</TableColumn>
                  <TableColumn>좋아요</TableColumn>
                  <TableColumn>댓글</TableColumn>
                  <TableColumn>조회수</TableColumn>

                  {/* <TableColumn>상세보기</TableColumn> */}
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
                            ></Checkbox> */}
                      {/* </TableCell> */}
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.noticeBoard}</TableCell>
                      <TableCell>
                        <span className="text-[#868F9A]">
                          {row.creationDate}
                        </span>
                      </TableCell>
                      <TableCell>{row.great}</TableCell>
                      <TableCell>{row.comment}</TableCell>
                      <TableCell>{row.views}</TableCell>

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

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default MyActivities;
