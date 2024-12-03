"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Button,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

const purchaseTicket = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const handleSelectionChange = (keys: any) => {
    const newSelectedKeys: Set<string> = new Set<string>(
      Array.from(keys).map(String)
    );
    setSelectedKeys(newSelectedKeys);
  };

  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 " />

      <div className="flex flex-col items-center justify-start max-sm:w-[85%] max-lg:w-[55%] w-[40%] min-h-[293px] gap-[40px] mt-10 mb-10 flex-1">
        <h2 className="w-full min-h-[34px] text-center text-[24px] font-semibold text-black">
          이용권 구매
        </h2>

        <div className="w-full">
          <Accordion
            selectionMode="multiple"
            variant="splitted"
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            className="space-y-6"
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              className={`w-full  rounded-xl border shadow-sm ${
                selectedKeys.has("1") ? "border-[#8D64F8]" : "border-[#CFD4DA]"
              }  gap-[10px] p-2`}
              title={
                <section className="w-full min-h-[54px] flex flex-row items-center justify-between gap-[20px] max-sm:items-start max-sm:flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center gap-[px]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className=" font-semibold text-[20px]">
                        고등 연회원 (신규)
                      </p>
                    </div>

                    <div className="flex flex-row items-start justify-start w-full">
                      <p className="text-[14px] text-[#868F9A]">
                        고등국어 자료 1년간 2,000점 사용
                      </p>
                    </div>
                  </div>

                  <div className="w-[40%] max-sm:w-full max-sm:justify-start min-h-[44px] flex flex-row items-center  max-sm:items-start justify-end gap-[10px]">
                    <div>
                      <p className="text-[#8D64F8] text-[20px] font-bold">
                        270,000원
                      </p>
                    </div>
                    <div>
                      <div
                        className={`text-[14px]  ${
                          selectedKeys.has("1")
                            ? "bg-[#8D64F8] text-[#FFFFFF]"
                            : "text-[#8D64F8] bg-white border border-[#8D64F8]"
                        }  px-4 py-2 rounded-md font-bold`}
                      >
                        {" "}
                        구매하기
                      </div>
                    </div>
                  </div>
                </section>
              }
              hideIndicator={true}
            >
              <hr className="w-full border-t-2 border-[rgb(207,212,218)] py-1" />
              <div className="w-full min-h-[68px] flex flex-row max-sm:flex-col max-sm:items-start items-center justify-between overflow-hidden gap-[20px]">
                <div className="flex-1 min-h-[48px] flex flex-col max-sm:justify-start justify-center ]">
                  <div className="flex flex-row items-center min-w-[285px] ">
                    <p className="text-xl font-bold">
                      고등 연회원 (‘자유로국어교실’ 카페 연회원 할인)
                    </p>
                  </div>

                  <span className="mt-3 text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                  <span className="text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                </div>

                <div className="w-[40%] max-sm:w-full min-h-[33px] max-sm:justify-start flex items-center justify-end gap-[8px]">
                  <p className="text-[#8D64F8] text-[14px] font-bold">
                    240,000원
                  </p>
                  <button className="py-2 px-4 text-[12px] font-bold text-[#8D64F8] border-[#8D64F8] border bg-white rounded-md">
                    구매하기
                  </button>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              className={`w-full  rounded-xl border shadow-sm ${
                selectedKeys.has("2") ? "border-[#8D64F8]" : "border-[#CFD4DA]"
              }  gap-[10px] p-2`}
              title={
                <section className="w-full min-h-[54px] max-sm:flex-col flex flex-row items-center justify-between gap-[6px]">
                  <div className="w-full flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-1 flex-row items-start justify-between ">
                      <p className=" font-semibold text-[20px]">중학 연회원</p>
                    </div>

                    <div className="flex flex-row items-start justify-start w-full">
                      <p className="text-[14px] text-[#868F9A]">
                        중학국어 자료 1년간 1,500점 사용
                      </p>
                    </div>
                  </div>

                  <div className="w-[55%] max-sm:w-full min-h-[44px] max-sm:justify-start  max-sm:items-start flex flex-row items-center justify-end gap-[10px]">
                    <div>
                      <p className="text-[#8D64F8] text-[20px] font-bold">
                        200,000원
                      </p>
                    </div>
                    <div>
                      <div
                        className={`text-[14px]  ${
                          selectedKeys.has("2")
                            ? "bg-[#8D64F8] text-[#FFFFFF]"
                            : "text-[#8D64F8] bg-white border border-[#8D64F8]"
                        }  px-4 py-2 rounded-md font-bold`}
                      >
                        {" "}
                        구매하기
                      </div>
                    </div>
                  </div>
                </section>
              }
              hideIndicator={true}
            >
              <hr className="w-full border-t-2 border-[rgb(207,212,218)] py-1" />
              <div className="w-full min-h-[68px] flex flex-row max-sm:flex-col max-sm:items-start items-center justify-between overflow-hidden gap-[20px]">
                <div className="flex-1 min-h-[48px] flex flex-col max-sm:justify-start justify-center gap-[10px]">
                  <div className="flex flex-row items-center min-w-[285px] ">
                    <p className="text-xl font-bold">
                      고등 연회원 (‘자유로국어교실’ 카페 연회원 할인)
                    </p>
                  </div>

                  <span className="mt-3 text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                  <span className="text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                </div>

                <div className="w-[40%] max-sm:w-full min-h-[33px] max-sm:justify-start flex items-center justify-end gap-[8px]">
                  <p className="text-[#8D64F8] text-[14px] font-bold">
                    240,000원
                  </p>
                  <Button className="min-w-[80px] h-[33px] text-[12px] font-bold text-[#8D64F8] border-[#8D64F8] border bg-white rounded-md">
                    구매하기
                  </Button>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              className={`w-full  rounded-xl border shadow-sm ${
                selectedKeys.has("3") ? "border-[#8D64F8]" : "border-[#CFD4DA]"
              }  gap-[10px] p-2`}
              title={
                <section className="w-full min-h-[54px] max-sm:flex-col flex flex-row items-center justify-between gap-[6px]">
                  <div className="w-full flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-1 flex-row items-start justify-between ">
                      <p className=" font-semibold text-[20px]">
                        중고등 연회원
                      </p>
                    </div>

                    <div className="flex flex-row items-start justify-start w-full">
                      <p className="text-[14px] text-[#868F9A]">
                        중고등 자료 1년간 4,000점 사용
                      </p>
                    </div>
                  </div>

                  <div className="w-[55%] max-sm:w-full min-h-[44px] max-sm:justify-start  max-sm:items-start flex flex-row items-center justify-end gap-[10px]">
                    <div>
                      <p className="text-[#8D64F8] text-[20px] font-bold">
                        390,000원
                      </p>
                    </div>
                    <div>
                      <div
                        className={`text-[14px]  ${
                          selectedKeys.has("3")
                            ? "bg-[#8D64F8] text-[#FFFFFF]"
                            : "text-[#8D64F8] bg-white border border-[#8D64F8]"
                        }  px-4 py-2 rounded-md font-bold`}
                      >
                        {" "}
                        구매하기
                      </div>
                    </div>
                  </div>
                </section>
              }
              hideIndicator={true}
            >
              <hr className="w-full border-t-2 border-[rgb(207,212,218)] py-1" />
              <div className="w-full min-h-[68px] flex flex-row max-sm:flex-col max-sm:items-start items-center justify-between overflow-hidden gap-[20px]">
                <div className="flex-1 min-h-[48px] flex flex-col max-sm:justify-start justify-center gap-[10px]">
                  <div className="flex flex-row items-center min-w-[285px] ">
                    <p className="text-xl font-bold">
                      고등 연회원 (‘자유로국어교실’ 카페 연회원 할인)
                    </p>
                  </div>

                  <span className="mt-3 text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                  <span className="text-sm text-[#868F9A]">
                    -자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에
                    한정함
                  </span>
                </div>

                <div className="w-[40%] max-sm:w-full min-h-[33px] max-sm:justify-start flex items-center justify-end gap-[8px]">
                  <p className="text-[#8D64F8] text-[14px] font-bold">
                    240,000원
                  </p>
                  <Button className="min-w-[80px] h-[33px] text-[12px] font-bold text-[#8D64F8] border-[#8D64F8] border bg-white rounded-md">
                    구매하기
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 w-full flex items-start justify-start">
            <p className="text-[14px] text-[#868F9A] ">
              개별 작품 구매는 구매할 자료를 장바구니에 담아서 구매하실 수
              있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-[200px] py-[40px] gap-[10px] mb-10 bg-[#FAFAFB]">
        <div className=" max-sm:w-[85%] max-lg:w-[55%] w-[40%] min-h-[120px]">
          <p className="text-[#868F9A] text-[14px]">
            &lt;이용권 구매 유의 사항&gt;
          </p>
          <p className="text-[#868F9A] text-[14px]">
            -각각의 자료에는 비중에 따라 0.5점, 1점, 2점 등의 점수가 부여되어
            있으며,
          </p>
          <p className="text-[#868F9A] text-[14px]">
            1년 동안 고등 연회원은 2000점, 중학 연회원은 1500점, 중고등 연회원은
            4000점에 해당하는 자료를 이용하실 수 있습니다.
          </p>
          <p className="text-[#868F9A] text-[14px]">
            -이용하는 도중에 환불할 경우에는 이용한 자료의 포인트만큼 차감하고
            환불하므로 개별 구매한 것과 동일한 결과가 됩니다. 환불은
            결제일로부터 1개월 이내에 가능합니다.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default purchaseTicket;
