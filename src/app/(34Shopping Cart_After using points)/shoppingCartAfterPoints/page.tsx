"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Checkbox, Button } from "@nextui-org/react";
import { ShoppingCartTable } from "@/assets/shoppingCart";
import Image from "next/image";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const ShoppingCartAfterPoints = () => {
  const options = [
    { key: "1", label: "이전글" },
    { key: "2", label: "다음글" },
  ];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 4;

  const pages = Math.ceil(ShoppingCartTable.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(ShoppingCartTable.slice(start, end));
    return ShoppingCartTable.slice(start, end);
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
      <div className="flex min-h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[25px]">
        {/* SideBar */}
        <Sidebar width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] min-h-auto pt-[30px] max-md:pt-[70px] gap-[20px]">
          <div className="items-center justify-center w-full min-h-[34px]">
            <h3 className="text-[24px] font-bold"> 장바구니 </h3>
          </div>

          <div className="w-full min-h-[249px] gap-[12px]">
            <div className="w-full min-h-[249px] gap-[12px]">
              <div className="flex flex-row items-end justify-end w-full min-h-[36px]">
                <Button className=" min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A] flex items-center">
                  선택파일 삭제
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
                      <TableColumn>게시판 출처</TableColumn>
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
                          <TableCell>{row.number}</TableCell>
                          <TableCell>
                            <div className="flex items-start justify-start gap-2">
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
                          <TableCell className="text-nowrap">
                            {row.author}
                          </TableCell>
                          <TableCell>{row.numberOfPages}</TableCell>
                          <TableCell className="text-nowrap">
                            {row.annualMemberScore}
                          </TableCell>
                          <TableCell>{row.point}</TableCell>
                          <TableCell className="text-nowrap">
                            {row.bulletInboardSource}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </article>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full min-h-[89px] gap-[10px] pt-3">
            <div className="flex flex-row items-start justify-start w-full min-h-[28px] gap-[12px]">
              <Checkbox defaultSelected color="default">
                <span className="text-[14px]">포인트 사용</span>
              </Checkbox>

              <div className="flex flex-row flex-wrap items-center w-[50%] min-h-[28px] gap-[6px]">
                <div className="flex items-center justify-center w-[68px] min-h-[28px] border border-[#E0E0E0] rounded-md text-[12px] text-[#868F9A]">
                  0
                </div>

                <Button className="w-[37px] min-h-[28px] font-bold rounded-md text-[12px] bg-[#E0F1FF] text-[#42A8FD] flex items-center justify-center">
                  확인
                </Button>

                <div className="w-[190px] min-h-[28px] flex items-center text-[12px] text-[#868F9A]">
                  사용가능 : 2,000원
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center flex-wrap justify-center w-full min-h-[59px] border-t border-b gap-[40px] py-[8px] ">
              <div className="flex flex-col items-centermin w-[52px] min-h-[43px]">
                <p className="text-[14px]">총 금액</p>
                <p className="text-[16px] font-bold">10,000</p>
              </div>
              <Image
                src="/assets/Icons/Subtract.svg"
                alt="Clip Image"
                width={10}
                height={10}
              />
              <div className="flex flex-col items-center min-w-[52px] min-h-[43px]">
                <p className="text-[14px]">포인트</p>
                <p className="text-[16px] font-bold">2,000</p>
              </div>
              <Image
                src="/assets/Icons/EqualSign.svg"
                alt="Clip Image"
                width={10}
                height={10}
              />
              <div className="flex flex-col items-center min-w-[62px] min-h-[43px]">
                <p className="text-[14px]">결제 금액</p>
                <p className="text-[16px] font-bold text-[#8D64F8]">8,000</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full min-h-[42px] items-center justify-center pt-2">
            <Button className="w-[50%] min-h-[42px] font-bold rounded-md py-[10px] px-[20px] text-[16px] bg-[#42A8FD] text-[#FFFFFF] ">
              구매하기
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCartAfterPoints;
