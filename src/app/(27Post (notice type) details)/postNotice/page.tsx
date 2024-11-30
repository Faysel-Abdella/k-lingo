"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar5 from "@/components/Sidebar5";
import { Checkbox, Button } from "@nextui-org/react";
import { PostDetailsT1 } from "@/assets/PostDetailT1";
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

const PostNotice = () => {
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
        <Sidebar5 width="w-[25%]" />

        {/* RightSide */}
        <div className="flex flex-col items-start justify-start flex-1 max-md:w-[75%] max-md:px-[5%] h-auto pt-[30px] max-md:pt-[60px] gap-[20px]">
          {/* Heading  */}
          <div className="flex flex-col items-center w-full min-h-[108px] py-[24px] border-b gap-[12px]">
            <div className="flex items-start justify-start w-full min-h-[28px]">
              <h3 className="font-bold text-[20px]">출제하실 분 모십니다</h3>
            </div>

            <div className="flex flex-row items-center w-full h-full justify-between">
              <div className="flex flex-row items-start justify-start min-w-[128px] min-h-[20px] gap-[12px]">
                <h3 className=" text-[#868F9A] text-[14px]">idid1234</h3>
                <h3 className="text-[#868F9A] text-[14px]">2024.11.01</h3>
              </div>

              <div className="flex flex-row items-center justify-center min-w-[50px] min-h-[20px] gap-[4px]">
                <Image
                  src="/assets/Icons/copy.svg"
                  alt="Clip Image"
                  width={20}
                  height={20}
                />
                <p className="text-[14px]">공유</p>
              </div>
            </div>
          </div>

          {/* --- --- --- --- - MIDDLE - --- --- ---   */}

          {/* <div className='flex flex-row items-center justify-between p-[16px] border rounded-lg w-[814px] min-h-[72px]'>
                        <div className="flex flex-row items-start justify-start w-[565px] min-h-[20px] gap-[20px]">
                            <div className="flex flex-row items-center justify-center w-[250px] min-h-[20px] gap-[8px]">
                                <p className='text-[14px]'>
                                    서동요 (김영현) (25 수완) (12문제)
                                </p>

                                <Image
                                    src="/assets/Icons/Attach.svg"
                                    alt="Clip Image"
                                    width={16}
                                    height={16}
                                />
                            </div>

                            <div className="flex items-center justify-center w-[21px] min-h-[20px]">
                                <p className='text-[14px] '>5쪽</p>
                            </div>

                            <div className="flex items-center justify-center w-[35px] min-h-[20px]">
                                <p className='text-[14px] '>0.5점</p>
                            </div>

                            <div className="flex items-center justify-center w-[41px] min-h-[20px]">
                                <p className='text-[14px] '>1,000P</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center w-[207px] min-h-[40px] gap-[8px]">
                            <Button className='w-[103px] min-h-[40px] rounded-md py-[10px] px-[14px] bg-[#E0F1FF] text-[14px] text-[#42A8FD] font-bold gap-[6px]'>
                                장바구니 담기
                            </Button>
                            <Button className='w-[96px] min-h-[40px] text-[14px] rounded-md py-[10px] px-[14px] bg-[#E0F1FF] text-[#42A8FD] font-bold gap-[6px]'>
                                <div className="flex flex-row items-center justify-center gap-1 w-[48px] h[20px]">
                                    <Image
                                        src="/assets/Icons/BluedownloadIcon.svg"
                                        alt="Clip Image"
                                        width={14}
                                        height={14}
                                    />

                                    <p className='text-[14px]'>다운로드</p>

                                </div>



                            </Button>
                        </div>

                    </div> */}

          {/* Buttons  */}
          {/* <div className='flex flex-row items-start justify-between w-[256px] min-h-[50px] gap-[6px]'>
                    <Button className='w-full min-h-[50px] rounded-md py-[14px] px-[20px] bg-[#E0F1FF] text-[#42A8FD]'>
                        장바구니 담기
                    </Button>
                    <div className='flex flex-row items-center justify-between'>
                        <Button className='w-[125px] min-h-[50px] rounded-md py-[14px] px-[20px] bg-[#E0F1FF] text-[#42A8FD]'>
                            다운로드
                        </Button>
                        <Image
                            src="/assets/Icons/BluedownloadIcon.svg"
                            alt="Clip Image"
                            width={12}
                            height={12}
                        />
                    </div>
                </div> */}

          {/* --- ---- ---- ----  TextBox  ---- --- --- ---  */}
          <div className="w-full min-h-[250px] items-start justify-start">
            <p className="text-[16px]"> 본문영역 </p>
          </div>

          {/* Icons  */}
          <div className="flex flex-row flex-wrap items-center gap-[20px] justify-between w-full min-h-[33px]">
            {/* LEFT SIDE  */}
            <div className="min-w-[100px] min-h-[20px] flex flex-row items-center justify-between gap-[24px]">
              <div className="flex flex-row min-w-[41px] min-h-[20px] items-center justify-center gap-[6px]">
                <Image
                  src="/assets/Icons/Like.svg"
                  alt="Clip Image"
                  width={20}
                  height={20}
                />
                <p className="text-[14px]">10</p>
              </div>

              <div className="flex flex-row min-w-[35px] min-h-[20px] items-center justify-center gap-[6px]">
                <Image
                  src="/assets/Icons/Comment.svg"
                  alt="Clip Image"
                  width={20}
                  height={20}
                />
                <p className="text-[14px]">5</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-row flex-wrap items-center justify-center  min-h-[33px] gap-[8px]">
              {/* Dropdown 1 */}
              <DropDown
                options={options}
                defaultSelectedKeys="1"
                selectStyles="w-[72px] h-full box-border"
                insideStyles="px-[6px] rounded-md"
              />

              {/* Dropdown 2 */}
              <DropDown
                options={options}
                defaultSelectedKeys="2"
                selectStyles="w-[72px] h-full box-border"
                insideStyles="px-[6px] rounded-md"
              />

              {/* Button */}
              <Button className="min-w-[45px] h-full box-border bg-[#ECEDF1] text-[12px] text-[#868F9A] rounded-md py-[12px]">
                목록
              </Button>
            </div>
          </div>

          <hr className="w-full border-t-1 border-[rgb(207,212,218)] " />

          {/* Bottom ID  */}
          <div className="w-full min-h-[198px]">
            <h3 className="font-bold text-[16px]">
              댓글 <span className="text-[#8D64F8]">5</span>
            </h3>

            <div className="flex flex-col items-start w-full min-h-[176px]">
              <div className="flex flex-row w-full min-h-[88px] items-start justify-start border-b py-[20px] gap-[20px]">
                <div className="text-[16px] text-[#868F9A]">id1234</div>

                <div className="flex flex-col items-start min-w-[134px] min-h-[24px] gap-1">
                  <div className="">반갑습니다</div>
                  <div className="text-[14px] text-[#868F9A]">2024.11.01</div>
                </div>
              </div>

              <div className="flex flex-row min-h-[88px] items-start justify-start py-[20px] gap-[20px]">
                <div className="text-[16px] text-[#868F9A]">aaa111</div>

                <div className="flex flex-col items-start min-w-[134px] min-h-[24px] gap-1">
                  <div className="">안녕하세요!</div>
                  <div className="text-[14px] text-[#868F9A]">2024.10.01</div>
                </div>
              </div>
            </div>
          </div>

          {/* INPUT FIELD  */}

          <div className="flex flex-row items-center justify-between w-full min-h-[40px]">
            {/* Input Field */}
            <InputNoLabel
              placeholder="댓글을 입력해 주세요"
              inputParentStyles="w-full h-full rounded-md py-[10px] px-[16px]"
              mainStyles="w-full"
            />

            {/* Button */}
            <Button className="min-w-[64px] h-full py-[10px] px-[20px] bg-[#353A46] text-[14px] text-[#FFFFFF] rounded-md">
              등록
            </Button>
          </div>

          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostNotice;
