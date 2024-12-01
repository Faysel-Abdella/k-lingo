"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar6 from "@/components/Sidebar6";
import { Checkbox, Button } from "@nextui-org/react";
import { PostDetailsT1 } from "@/assets/PostDetailT1";
import Image from "next/image";
import InputNoLabel from "@/components/InputNoLable";
import DropDown from "@/components/DropDown";
import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

// Dynamically import the JoditEditor to prevent SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Writing = () => {
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

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-between ">
      <Header />
      <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

      {/* Sidebar and the right side */}
      <div className="flex h-full flex-row w-[75%] items-start max-md:justify-start max-md:items-start max-lg:w-[85%] max-md:w-[100%] gap-[10px]">
        {/* SideBar */}
        <Sidebar6 width="w-[25%] max-md:w-[30%] max-sm:w-[50%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] h-auto pt-[30px] max-md:pt-[100px] gap-[20px]">
          {/* --- --- --- HEADING --- --- ---  */}
          <div className="flex flex-row items-center justify-between w-full h-[36px]">
            <div className="w-full min-h-[34px]">
              <h3 className="text-[24px] font-bold">글쓰기</h3>
            </div>

            <Button className="w-[52px] min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#E0F1FF] text-[#42A8FD]">
              등록
            </Button>
          </div>

          {/* --- --- ---  BOX --- -- ---- */}
          <div className="flex flex-col border items-center justify-center w-full min-h-[554px]">
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

            <div className="flex flex-row items-center justify-center w-full min-h-[56px] border">
              <div className="flex items-center justify-center min-w-[83px] min-h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                <p className="min-w-[54px] min-h-[20px] text-[14px]">
                  첨부파일{" "}
                </p>
              </div>
              <div className="w-full min-h-[56px] p-[8px] gap-[10px]">
                <Button className="min-w-[52px] min-h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A]">
                  찾아보기
                </Button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full min-h-[444px]">
              <div className="flex items-center justify-center min-w-[83px] min-h-[444px] py-[12px] gap-[10px] text-[14px] font-bold bg-[#F3F4F6]">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
