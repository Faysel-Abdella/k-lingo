"use client";

import { useState, useMemo, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar6 from "@/components/Sidebar6";
import { PostDetailsT1 } from "@/assets/PostDetailT1";
import InputNoLabel from "@/components/InputNoLable";
import {
  RadioGroup,
  Radio,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import dynamic from "next/dynamic";
import React from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const DataRegistration = () => {
  const {
    isOpen: isDetailBtn,
    onOpen: onDetailBtn,
    onOpenChange: onDetailBtnChange,
  } = useDisclosure();

  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };

  const options = [
    { key: "1", label: "이전글" },
    { key: "2", label: "다음글" },
  ];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 15;

  const pages = Math.ceil(PostDetailsT1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(PostDetailsT1.slice(start, end));
    return PostDetailsT1.slice(start, end);
  }, [page, rowsPerPage]);

  const years = ["2025", "2024", "2023", "2022"];
  const months = ["3월", "4월", "6월", "7월", "9월", "10월", "11월"];

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between ">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex min-h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[25px]">
        {/* SideBar */}
        <Sidebar6 width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] min-h-auto pt-[30px] max-md:pt-[70px] gap-[20px]">
          {/* --- --- --- HEADING --- --- ---  */}
          <div className="flex flex-row items-center justify-between w-full min-h-[36px]">
            <div className="w-full min-h-[34px]">
              <h3 className="text-[24px] font-bold">글쓰기</h3>
            </div>

            <Button className="min-w-[52px] min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#E0F1FF] text-[#42A8FD]">
              등록
            </Button>
          </div>

          {/* --- --- ---  BOX --- -- ---- */}
          <div className="flex flex-col border items-center justify-center w-full min-h-[719px]">
            <div className="flex flex-row items-center justify-center w-full min-h-[56px] border">
              <div className="flex items-center justify-center min-w-[83px] min-h-[56px] border-b bg-[#F3F4F6] text-[14px] font-bold py-[12px] gap-[10px]">
                {" "}
                제목{" "}
              </div>

              <InputNoLabel
                placeholder="제목을 입력해 주세요"
                inputParentStyles="w-full rounded-md  px-[12px] min-h-[40px] gap-[10px]"
                mainStyles="w-full"
              />
            </div>

            <div className="flex flex-row items-center  w-full min-h-[56px] border">
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">쪽수 </p>
                </div>
                <div className="w-full min-h-[56px] p-[8px] gap-[10px]">
                  <InputNoLabel
                    placeholder="입력"
                    inputParentStyles="w-full rounded-md  px-[12px] min-h-[40px] gap-[10px]"
                    mainStyles="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">연회원 점수 </p>
                </div>
                <div className="w-full min-h-[56px] p-[8px] gap-[10px]">
                  <InputNoLabel
                    placeholder="입력"
                    inputParentStyles="w-full rounded-md  px-[12px] min-h-[40px] gap-[10px]"
                    mainStyles="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">포인트 </p>
                </div>
                <div className="w-full min-h-[56px] p-[8px] gap-[10px]">
                  <InputNoLabel
                    placeholder="입력"
                    inputParentStyles="w-full rounded-md  px-[12px] min-h-[40px] gap-[10px]"
                    mainStyles="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full min-h-[444px] border">
              <div className="flex items-center justify-center min-w-[83px] min-h-[444px] py-[12px] gap-[10px] text-[14px] border-b font-bold bg-[#F3F4F6]">
                {" "}
                내용{" "}
              </div>

              <div className="flex items-center w-full min-h-[400px] p-[8px]">
                <div className="w-full">
                  <JoditEditor
                    ref={editor}
                    config={config}
                    value=""
                    onChange={(newContent) => console.log(newContent)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center  w-full min-h-[56px] border">
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">공지글 여부 </p>
                </div>
                <div className=" min-h-[56px] p-[8px] gap-[10px]">
                  <RadioGroup
                    orientation="horizontal"
                    defaultValue="regular"
                    onValueChange={(value) => console.log("Selected:", value)}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <Radio
                      value="regular"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      일반글
                    </Radio>
                    <Radio
                      value="notice"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      공지
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">공개 여부</p>
                </div>
                <div className=" min-h-[56px] p-[8px] gap-[10px]">
                  <RadioGroup
                    orientation="horizontal"
                    defaultValue="regular"
                    onValueChange={(value) => console.log("Selected:", value)}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <Radio
                      value="regular"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      공개
                    </Radio>
                    <Radio
                      value="notice"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      비공개
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                  <p className="text-[14px]">댓글 허용</p>
                </div>
                <div className=" min-h-[56px] p-[8px] gap-[10px]">
                  <RadioGroup
                    orientation="horizontal"
                    defaultValue="regular"
                    onValueChange={(value) => console.log("Selected:", value)}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <Radio
                      value="regular"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      허용
                    </Radio>
                    <Radio
                      value="notice"
                      classNames={{
                        base: "inline-flex m-0 bg-transparent hover:bg-content2 items-center justify-between",
                        wrapper: "w-4 h-4",
                        labelWrapper: "ml-2",
                        label: "text-sm",
                      }}
                    >
                      비허용
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full min-h-[56px] border">
              <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                <p className="min-w-[54px] min-h-[20px] text-[14px]">필터링 </p>
              </div>
              <div className="w-full min-h-[56px] p-[8px] gap-[10px]">
                <Button
                  className="min-w-[52px] min-h-[40px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A]"
                  onClick={onDetailBtn}
                >
                  보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}

      <Modal
        isOpen={isDetailBtn}
        placement="center"
        onOpenChange={onDetailBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[595px] p-0 flex justify-center items-center "],
          body: ["w-full p-0 flex justify-center items-center"],
        }}
        className="w-[900px] p-0 flex justify-center items-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="mt-5 py-3 text-center text-[20px] font-bold text-mainBlack">
                    필터링 선택
                  </h2>
                </div>

                <div className="border-1 border-[#CFD4DA] w-[85%]">
                  <div className="flex items-center gap-4">
                    <h1 className="bg-[#F3F4F6] text-xs text-center font-bold text-[#868F9A] py-3 w-16">
                      학년
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#868F9A]">
                      <p>고1</p>
                      <p>고2</p>
                      <p>고3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t-1 border-[#CFD4DA]">
                    <h1 className="bg-[#F3F4F6] text-xs text-center font-bold text-[#868F9A] py-3 w-16">
                      시행연도
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#868F9A]">
                      <p>2025</p>
                      <p>2024</p>
                      <p>2023</p>
                      <p>2022</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t-1 border-[#CFD4DA]">
                    <h1 className="bg-[#F3F4F6] text-xs text-center font-bold text-[#868F9A] py-3 w-16">
                      월
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#868F9A]">
                      <p>3월</p>
                      <p>4월</p>
                      <p>6월</p>
                      <p>7월</p>
                      <p>9월</p>
                      <p>10월</p>
                      <p>11월</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t-1 border-[#CFD4DA]">
                    <h1 className="bg-[#F3F4F6] text-xs text-center font-bold text-[#868F9A] py-3 w-16">
                      분야
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#868F9A]">
                      <p>독서</p>
                      <p>문학</p>
                      <p>화법과 작문</p>
                      <p>언어와 매체(문법)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t-1 border-[#CFD4DA]">
                    <h1 className="bg-[#F3F4F6] text-xs text-center font-bold text-[#868F9A] py-3 w-16">
                      유형
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#868F9A]">
                      <p>해설 </p>
                      <p>정리</p>
                      <p>연관 문제</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <Button
                    className="rounded-[10px] bg-[#ECEDF1] text-[#868F9A] px-4 py-[12px] text-base font-bold"
                    onClick={() => {
                      onDetailBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className="rounded-[10px] bg-[#E0F1FF] text-[#42A8FD] px-4 py-[12px] text-base font-bold"
                    onClick={() => {
                      onDetailBtnChange();
                    }}
                  >
                    확인
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

export default DataRegistration;
