"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar2 from "@/components/Sidebar2";
import { Checkbox, Button } from "@nextui-org/react";
import { SearchT1 } from "@/assets/SearchT1";
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

const SearchWithinBullet = () => {
  const options = [{ key: "1", label: "고1 모의" }];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(SearchT1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(SearchT1.slice(start, end));
    return SearchT1.slice(start, end);
  }, [page, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex min-h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[25px]">
        {/* SideBar */}
        <Sidebar2 width="w-[25%]  max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] min-h-auto pt-[30px] max-md:pt-[70px] gap-[20px]">
          {/* Top */}
          <div className="flex flex-col items-center justify-center w-full min-h-[86px] gap-[12px]">
            <div className="flex flex-col items-center justify-center w-full min-h-[34px]">
              <h3 className="font-bold text-[24px]">검색 결과</h3>
            </div>

            {/* Input and Button Row */}
            <div className="flex flex-row items-center justify-center w-[60%] max-md:flex-wrap   bg-red-400 min-h-[44px] gap-[12px]">
              {/* Dropdown */}
              <DropDown
                options={options}
                defaultSelectedKeys="1"
                selectStyles="w-[125px] h-full"
                insideStyles="px-[16px] rounded-md"
              />

              {/* Input Field */}
              <InputNoLabel
                placeholder="사미인곡"
                inputParentStyles=" flex-1 h-full rounded-md px-[16px]"
                mainStyles="w-full"
              />

              {/* Button */}
              <Button className="w-[64px] py-[12px] h-full px-[20px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full  gap-[1px] pt-10">
            <div className="flex flex-row items-start justify-start pl-3 min-w-full min-h-[20px]">
              <h3 className=" text-[#868F9A] text-[14px]">
                검색어<span className="text-[#8D64F8]">(사미인곡)</span>으로
                검색한 결과
              </h3>
            </div>
          </div>
          <div className="w-full gap-[24px]">
            <article className="">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "relative px-[40px] py-[10px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] w-full min-h-[41px] text-center",
                    "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                  ],
                  td: [
                    "py-[10px] w-full min-h-[40px] px-[20px] text-[14px] text-center font-normal text-base text-[#363941] ",
                  ],
                }}
                bottomContent={
                  <div className="flex flex-col items-center justify-center w-full gap-[40px]">
                    {/* Existing Button Container */}
                    <div className="flex flex-row items-center justify-between min-h-[42px] mb-4 gap-4">
                      <Button className=" min-h-[42px] font-bold rounded-md py-[10px] px-[24px] bg-[#42A8FD] text-white flex items-center gap-4">
                        <Image
                          src="/assets/Icons/whiteBag.svg"
                          alt="Clip Image"
                          width={20}
                          height={20}
                        />
                        선택파일 장바구니 담기
                      </Button>
                      <Button className="min-h-[42px] font-bold rounded-md py-[10px] px-[20px] bg-[#42A8FD] text-white flex items-center">
                        <Image
                          src="/assets/Icons/downloadIcon.svg"
                          alt="Clip Image"
                          width={20}
                          height={20}
                        />
                        선택파일 다운로드
                      </Button>
                    </div>

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
                    <div className="flex flex-row flex-wrap items-center justify-between min-h-[40px] ">
                      {/* Input Field */}
                      <DropDown
                        options={options}
                        defaultSelectedKeys="1"
                        selectStyles="w-[106px] min-h-[44px]"
                        insideStyles="px-[16px] w-[104px] rounded-md"
                      />

                      <InputNoLabel
                        placeholder="사미인곡"
                        inputParentStyles="w-[252px] rounded-md  px-[16px] min-h-[40px] "
                      />

                      {/* Button */}
                      <Button className="w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                        검색
                      </Button>
                    </div>
                  </div>
                }
              >
                <TableHeader>
                  <TableColumn className="flex justify-center items-center">
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
                      className={`size-[14px] rounded-[2px] bg-transparent`}
                      isSelected={allListCheckedPageNumbers.includes(page)}
                    ></Checkbox>
                  </TableColumn>

                  <TableColumn>
                    <span className="">번호</span>
                  </TableColumn>
                  <TableColumn>
                    <span className=" ">제목</span>
                  </TableColumn>
                  <TableColumn>
                    <span className=" w-[100px]">작성자</span>
                  </TableColumn>
                  <TableColumn>
                    <span className=" ">쪽수</span>
                  </TableColumn>
                  <TableColumn>
                    <span className=" ">연회원 점수</span>
                  </TableColumn>
                  <TableColumn>
                    <span className=" ]">포인트</span>
                  </TableColumn>

                  {/* <TableColumn>상세보기</TableColumn> */}
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
                                clickedRowIds.filter((id) => id !== row.number)
                              );
                            } else {
                              setClickedRowIds([...clickedRowIds, row.number]);
                            }
                          }}
                          isSelected={clickedRowIds.includes(row.number)}
                        ></Checkbox>
                      </TableCell>
                      <TableCell>
                        <span className="text-[#868F9A] ">{row.number}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start w-[100px] justify-start gap-2">
                          <span>
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-[#8D64F8]">사미인곡</span>
                              <span> {row.author} </span>
                            </div>
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
                        <span className="text-[#868F9A]">{row.author}</span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">{row.numberOfPages}</span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">
                          {row.annualMemberScore}
                        </span>
                      </TableCell>
                      <TableCell className="w-[21px]">
                        <span className="w-[21px]">{row.point}</span>
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

export default SearchWithinBullet;

// th: [
//     "relative px-[40px] py-[10px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] w-full max-w-full overflow-x-auto min-h-[41px] ",
//     // "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
// ],
// td: ["py-[10px]  w-full max-w-full overflow-x-auto min-h-[40px] px-[20px] text-[14px] text-center font-normal text-base text-[#363941] "],
