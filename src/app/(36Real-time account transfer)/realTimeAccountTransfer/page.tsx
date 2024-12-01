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
import { RadioGroup, Radio } from "@nextui-org/react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const RealTimeAccountTransfer = () => {
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
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between">
      <div className="min-h-[100vh] w-full flex flex-col items-center justify-strat">
        <Header />
        <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

        {/* Sidebar and the right side */}
        <div className="flex min-h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[25px]">
          {/* SideBar */}
          <Sidebar width={"w-[25%] max-md:w-[30%] max-sm:w-[50%]"} />

          {/* RightSide */}
          <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] min-h-auto pt-[30px] max-md:pt-[70px] gap-[20px]">
            <div className="items-center justify-center w-full min-h-[34px]">
              <h3 className="text-[24px] font-bold"> 개별 작품 구매 </h3>
            </div>

            <div className="flex flex-col w-full min-h-[92px] gap-[10px]">
              <div className="min-w-[30px] min-h-[22px] text-[16px] font-bold">
                상품
              </div>

              <div className="flex flex-row gap-4 items-center justify-between border-t border-b py-[20px] min-h-[60px]">
                <p className="text-[14px]">한거십팔곡(권호문) 1-19수 외 2개</p>

                <p className="text-[14px] font-bold">3,000원</p>
              </div>
            </div>

            <div className="flex flex-col w-full min-h-[92px] gap-[10px]">
              <div className="] min-h-[22px] text-[16px] font-bold">
                결제 수단
              </div>

              <div className="flex flex-row flex-wrap items-center justify-between border-t border-b w-full min-h-[60px] py-[20px] gap-[20px]">
                <RadioGroup
                  orientation="horizontal"
                  defaultValue="실시간 계좌이체"
                >
                  <Radio value="신용카드">
                    <div className="text-[14px]">신용카드</div>
                  </Radio>
                  <Radio value="실시간 계좌이체">
                    <div className="text-[14px]">실시간 계좌이체</div>
                  </Radio>
                  <Radio value="간편결제">
                    <div className="text-[14px]">
                      간편결제{" "}
                      <span className="text-[10px] text-[#868F9A]">
                        (네이버페이, 카카오페이 등)
                      </span>
                    </div>
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="flex flex-col w-full min-h-[142px] gap-[10px]">
              <div className=" min-h-[22px] text-[16px] font-bold">
                현금영수증
              </div>

              <div className="flex flex-col items-start justify-start border-t border-b w-full min-h-[110px] py-[20px] gap-[10px]">
                <RadioGroup orientation="horizontal" defaultValue="신용카드">
                  <Radio value="신용카드">
                    <div className="text-[14px]">신용카드</div>
                  </Radio>
                  <Radio value="지출증빙">
                    <div className="text-[14px]">지출증빙</div>
                  </Radio>
                </RadioGroup>

                <InputNoLabel
                  placeholder="입력"
                  inputParentStyles="w-[35%] rounded-md  min-h-[40px] "
                  mainStyles="w-full"
                />
              </div>
            </div>

            <div className="flex flex-row w-full min-h-[42px] items-center justify-center pt-2">
              <Button className="w-[50%] min-h-[42px] font-bold rounded-md py-[10px] px-[20px] text-[16px] bg-[#42A8FD] text-[#FFFFFF] ">
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RealTimeAccountTransfer;
