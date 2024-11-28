'use client';

import { useState, useMemo } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Checkbox, Button } from "@nextui-org/react";
import { ShoppingCartTable } from '@/assets/shoppingCart';
import Image from 'next/image';
import InputNoLabel from '@/components/InputNoLable';
import DropDown from '@/components/DropDown';
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
        { key: "2", label: "다음글" }
    ]
    // Pagination Logic
    const [page, setPage] = useState(1);

    const rowsPerPage = 4

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
        <div className="min-h-[2949px] flex flex-col items-center justify-between">
            <Header />
            <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


            {/* Sidebar and the right side */}
            <div className='flex flex-row  justify-between w-[1080px] gap-[36px]'>
                {/* SideBar */}
                <Sidebar />

                {/* RightSide */}
                <div className='flex flex-col items-center justify-center w-[824px] h-[682px] gap-[40px] p-[60px]'>
                    <div className="items-center justify-center w[824px] h-[34px]">
                        <h3 className='text-[24px] font-bold'> 개별 작품 구매 </h3>
                    </div>


                    <div className="flex flex-col w-[824px] h-[92px] gap-[10px]">
                        <div className="w-[30px] h-[22px] text-[16px] font-bold">
                            상품
                        </div>


                        <div className="flex flex-row items-center justify-between border-t border-b py-[20px] h-[60px]">
                            <p className='text-[14px]'>한거십팔곡(권호문) 1-19수 외 2개</p>

                            <p className='text-[14px] font-bold'>3,000원</p>
                        </div>
                    </div>



                    <div className="flex flex-col w-[824px] h-[92px] gap-[10px]">
                        <div className="w-[65px] h-[22px] text-[16px] font-bold">
                            결제 수단
                        </div>

                        <div className="flex flex-row items-center justify-between border-t border-b w-[824px] h-[60px] py-[20px] gap-[20px]">
                            <RadioGroup
                                orientation='horizontal'
                                defaultValue="실시간 계좌이체"
                            >
                                <Radio value="신용카드">
                                    <div className="text-[14px]">
                                        신용카드
                                    </div>
                                </Radio>
                                <Radio value="실시간 계좌이체">
                                    <div className="text-[14px]">
                                        실시간 계좌이체
                                    </div>
                                </Radio>
                                <Radio value="간편결제">
                                    <div className="text-[14px]">
                                        간편결제 <span className='text-[10px] text-[#868F9A]'>(네이버페이, 카카오페이 등)</span>
                                    </div>
                                </Radio>

                            </RadioGroup>
                        </div>
                    </div>

                    <div className="flex flex-col w-[824px] h-[142px] gap-[10px]">
                        <div className="w-[75px] h-[22px] text-[16px] font-bold">
                            현금영수증
                        </div>

                        <div className="flex flex-col items-start justify-start border-t border-b w-[824px] h-[110px] py-[20px] gap-[10px]">
                            <RadioGroup
                                orientation='horizontal'
                                defaultValue="신용카드"
                            >
                                <Radio value="신용카드">
                                    <div className="text-[14px]">
                                        신용카드
                                    </div>
                                </Radio>
                                <Radio value="지출증빙">
                                    <div className="text-[14px]">
                                    지출증빙
                                    </div>
                                </Radio>
                            </RadioGroup>


                            <InputNoLabel
                                placeholder="입력"
                                inputParentStyles="w-[252px] rounded-md  h-[40px] "
                            />

                        </div>

                    </div>




                    <div className="flex flex-row w-[824px] h-[42px] items-center justify-center pt-2">
                        <Button className="w-[388px] h-[42px] font-bold rounded-md py-[10px] px-[20px] text-[16px] bg-[#42A8FD] text-[#FFFFFF] ">
                            구매하기
                        </Button>
                    </div>





                </div>
            </div>


            <Footer />

        </div>
    )
}

export default RealTimeAccountTransfer;
