"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Checkbox, Button } from "@nextui-org/react";
import { ShoppingCartTable } from "@/assets/shoppingCart";
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

const ShoppingCartBeforePoints = () => {
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
        <Sidebar width={"w-[20%]"} />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] min-h-auto pt-[30px] max-md:pt-[70px] gap-[20px]">
          <div className="items-center justify-center w-full min-h-[34px]">
            <h3 className="text-[24px] font-bold"> 장바구니 </h3>
          </div>

          <div className="w-full min-h-[249px] gap-[12px]">
            <div className="w-full min-h-[249px] gap-[12px]">
              <div className="flex flex-row items-end justify-end w-full min-h-[36px]">
                <Button className="min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A] flex items-center">
                  선택파일 삭제
                </Button>
              </div>

              <div className="w-full gap-[24px] overflow-x-auto">
                <article className="">
                  <Table
                    aria-label="Data Table"
                    shadow="none"
                    classNames={{
                      wrapper: "max-w-full",
                    }}
                    // bottomContent={
                    //     <div className="flex flex-col items-center justify-center pt-2 w-full gap-[40px]">

                    //         {/* <Pagination
                    //             isCompact
                    //             showControls
                    //             showShadow
                    //             color="primary"
                    //             page={page}
                    //             total={pages}
                    //             onChange={(page) => setPage(page)}
                    //         /> */}

                    //         {/* Input and Button Row */}
                    //         <div className="flex flex-row items-center justify-between w-[328px] min-h-[40px] ">
                    //             <InputNoLabel
                    //                 placeholder="사미인곡"
                    //                 inputParentStyles="w-[252px] rounded-md  px-[16px] min-h-[40px] "
                    //             />

                    //             {/* Button */}
                    //             <Button className="w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                    //                 검색
                    //             </Button>
                    //         </div>
                    //     </div>
                    // }
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
                        <div className="relative bottom-0.5"></div>
                      </TableColumn>

                      <TableColumn className="gap-1 border-r border-[#CFD4DA]">
                        <div className="flex flex-row  items-center justify-center">
                          <span className="">번호</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <div className="flex flex-row  items-center justify-between">
                          <span>제목</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <div className="flex items-center  justify-between">
                          <span className="">작성자</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <div className="flex items-center  justify-center gap-4">
                          <span className="">쪽수</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <div className="flex items-center justify-center gap-12">
                          <span className="">연회원 점수</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <div className="flex items-center justify-center gap-12">
                          <span className="">포인트</span>
                        </div>
                      </TableColumn>
                      <TableColumn className="border-r border-[#CFD4DA]">
                        <span className="">게시판 출처</span>
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
                          <TableCell>
                            <span className="">
                              <span className="text-[#868F9A] text-[14px]">
                                {row.number}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-start justify-start gap-2">
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
                            <div className=" ">
                              <span className="text-[#868F9A] text-[14px]">
                                {row.author}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="max-w-[24px]">
                              <span className="text-[14px]">
                                {row.numberOfPages}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="">
                              <span className="text-[14px]">
                                {row.annualMemberScore}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="">
                              <span className="text-[14px]">{row.point}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="">
                              <span className="text-[#868F9A] text-[14px]">
                                {row.bulletInboardSource}
                              </span>
                            </div>
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

          <div className="flex flex-col w-full min-h-[89px] gap-[10px] pt-3">
            <div className="flex flex-row items-start justify-start w-full min-h-[20px] gap-[12px]">
              <Checkbox>
                <span className="text-[14px]">포인트 사용</span>
              </Checkbox>
              <p className="text-[12px] text-[#868F9A] pt-1">
                사용가능 : 2,000원
              </p>
            </div>

            <div className="flex flex-row items-center justify-center w-full min-h-[59px] border-t border-b gap-[40px] py-[8px] ">
              <div className="flex flex-col items-center min-w-[52px] min-h-[43px]">
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
                <p className="text-[16px] font-bold">0</p>
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

          <div className="flex flex-row w-full min-h-[42px] items-center justify-center">
            <Button className="w-[40%] min-h-[42px] font-bold rounded-md py-[10px] px-[20px] text-[16px] bg-[#42A8FD] text-[#FFFFFF] ">
              구매하기
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCartBeforePoints;
