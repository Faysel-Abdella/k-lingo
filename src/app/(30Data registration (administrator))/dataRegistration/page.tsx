'use client';

import { useState, useMemo } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar6 from '@/components/Sidebar6';
import { Checkbox, Button } from "@nextui-org/react";
import { PostDetailsT1 } from '@/assets/PostDetailT1';
import Image from 'next/image';
import InputNoLabel from '@/components/InputNoLable';
import DropDown from '@/components/DropDown';
import {RadioGroup, Radio} from "@nextui-org/react";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@nextui-org/react";


const DataRegistration = () => {
    const options = [
        { key: "1", label: "이전글" },
        { key: "2", label: "다음글" }
    ]
    // Pagination Logic
    const [page, setPage] = useState(1);

    const rowsPerPage = 15

    const pages = Math.ceil(PostDetailsT1.length / rowsPerPage);

    const [currentData, setCurrentData] = useState<any>();

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        setCurrentData(PostDetailsT1.slice(start, end));
        return PostDetailsT1.slice(start, end);
    }, [page, rowsPerPage]);


    return (
        <div className="min-h-[2949px] flex flex-col items-center justify-between">
            <Header />
            <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


            {/* Sidebar and the right side */}
            <div className='flex flex-row  justify-between w-[1080px] gap-[36px]'>
                {/* SideBar */}
                <Sidebar6 />

                {/* RightSide */}
                <div className="flex flex-col items-center justify-center w-[824px] h-[827px]  gap-[24px]">
                    {/* --- --- --- HEADING --- --- ---  */}
                    <div className="flex flex-row items-center justify-between w-[824px] h-[36px]">
                        <div className="w-[732px] h-[34px]">
                            <h3 className='text-[24px] font-bold'>글쓰기</h3>
                        </div>

                        <Button className="w-[52px] h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#E0F1FF] text-[#42A8FD]">
                            등록
                        </Button>
                    </div>

                    {/* --- --- ---  BOX --- -- ---- */}
                    <div className="flex flex-col border items-center justify-center w-[824px] h-[719px]">
                        <div className="flex flex-row items-center justify-center w-[824px] h-[56px] border">
                            <div className="flex items-center justify-center w-[83px] h-[56px] border-b bg-[#F3F4F6] text-[14px] font-bold py-[12px] gap-[10px]"> 제목 </div>

                            <InputNoLabel
                                placeholder="제목을 입력해 주세요"
                                inputParentStyles="w-[741px] rounded-md  px-[12px] h-[40px] gap-[10px]"
                            />
                        </div>

                        <div className="flex flex-row items-center justify-center w-[824px] h-[56px] border">
                            <div className="flex items-center justify-center w-[83px] h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                                <p className='w-[54px] h-[20px] text-[14px]'>첨부파일 </p>
                            </div>
                            <div className="w-[741px] h-[56px] p-[8px] gap-[10px]">
                                <Button className="w-[52px] h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A]">
                                    찾아보기
                                </Button>
                            </div>

                        </div>


                        <div className="flex flex-row items-center justify-center w-[824px] h-[444px] border">
                            <div className="flex items-center justify-center w-[83px] h-[444px] py-[12px] gap-[10px] text-[14px] border-b font-bold bg-[#F3F4F6]"> 내용 </div>

                            <div className="flex items-center w-[741px] h-[444px] p-[8px] gap-[10px]">
                                <Image
                                    src="/assets/Images/WritingArea.svg"
                                    alt="Clip Image"
                                    width={725}
                                    height={428}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-[824px] h-[56px] ">
                            <div className="flex flex-row items-center justify-center w-[275px] h-[56px]">
                                <div className="flex items-center justify-center p-1 w-[83px] h-[56px] bg-[#F3F4F6] text-[14px] font-bold">
                                    공지글 여부
                                </div>

                                <div className="flex flex-row w-[191px] h-[36px]">
                                        <RadioGroup
                                        orientation='horizontal'
                                        >
                                        
                                        </RadioGroup>
                                </div>
                            </div>







                            <div className=""></div>

                            <div className=""></div>
                        </div>


                        <div className="flex flex-row items-center justify-center w-[824px] h-[56px] border">
                            <div className="flex items-center justify-center w-[83px] h-[56px] bg-[#F3F4F6] border-b text-[14px] font-bold py-[12px] gap-[10px]">
                                <p className='w-[54px] h-[20px] text-[14px]'>필터링 </p>
                            </div>
                            <div className="w-[741px] h-[56px] p-[8px] gap-[10px]">
                                <Button className="w-[52px] h-[40px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A]">
                                    보기
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>


            </div>


            <Footer />

        </div>
    )
}

export default DataRegistration;
