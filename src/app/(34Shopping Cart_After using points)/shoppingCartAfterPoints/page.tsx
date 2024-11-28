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
                <div className='flex flex-col items-center justify-center w-[824px] h-[654px] gap-[40px] p-[60px]'>
                    <div className="items-center justify-center w[824px] h-[34px]">
                        <h3 className='text-[24px] font-bold'> 장바구니 </h3>
                    </div>


                    <div className="w-[824px] h-[249px] gap-[12px]">

                        <div className='w-[824px] h-[249px] gap-[12px]'>
                            <div className="flex flex-row items-end justify-end w-[824px] h-[36px]">

                                <Button className="w-[103px] h-[36px] font-bold rounded-md py-[8px] px-[14px] text-[14px] bg-[#ECEDF1] text-[#868F9A] flex items-center">
                                    선택파일 삭제
                                </Button>

                            </div>

                            <article className="">
                                <Table
                                    aria-label="Data Table"
                                    shadow="none"
                                    classNames={{
                                        wrapper: "max-w-[824px] max-h-[1000px]",


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
                                //         <div className="flex flex-row items-center justify-between w-[328px] h-[40px] ">
                                //             <InputNoLabel
                                //                 placeholder="사미인곡"
                                //                 inputParentStyles="w-[252px] rounded-md  px-[16px] h-[40px] "
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
                                                            allListCheckedPageNumbers.filter((number) => number !== page)
                                                        );
                                                        setClickedRowIds(
                                                            clickedRowIds.filter(
                                                                (id) => !currentData.map((item: any) => item.number).includes(id)
                                                            )
                                                        );
                                                    } else {
                                                        setClickedRowIds([
                                                            ...clickedRowIds,
                                                            ...currentData.map((item: any) => item.number),
                                                        ]);
                                                        setAllListCheckedPageNumbers([...allListCheckedPageNumbers, page]);
                                                    }
                                                }}
                                                className="size-[14px] rounded-[2px] bg-transparent"
                                                isSelected={allListCheckedPageNumbers.includes(page)}
                                            />
                                            <div className="relative bottom-0.5">
                                                <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="1" height="25" fill="#CFD4DA" />
                                                </svg>
                                            </div>

                                        </TableColumn>

                                        <TableColumn className="gap-1">
                                            <div className="flex flex-row items-center justify-center">
                                                <span className="w-[41px]">번호</span>
                                                <div className="relative bottom-0.5">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </TableColumn>
                                        <TableColumn className="">
                                            <div className="flex flex-row items-center justify-between">
                                                <span>제목</span>

                                                <div className="relative bottom-0.5">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </TableColumn>
                                        <TableColumn className="">
                                            <div className="flex items-center justify-between">
                                                <span className="w-[60px]">작성자</span>


                                                <div className="relative bottom-0.5">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </TableColumn>
                                        <TableColumn className="">
                                            <div className="flex items-center justify-center gap-4">
                                                <span className="w-[21px]">쪽수</span>
                                                <div className="relative bottom-0.5">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </TableColumn>
                                        <TableColumn className="">
                                            <div className="flex items-center justify-center gap-12">
                                                <span className="w-[54px]">연회원 점수</span>
                                                <div className="relative bottom-0.5 ">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </TableColumn>
                                        <TableColumn className="">
                                            <div className="flex items-center justify-center gap-12">
                                                <span className="w-[31px]">포인트</span>
                                                <div className="relative bottom-0.5 ">
                                                    <svg width="1" height="25" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="1" height="25" fill="#CFD4DA" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </TableColumn>
                                        <TableColumn>
                                            <span className="w-[21px]">게시판 출처</span>
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
                                                    <span className=' w-[40px]'>
                                                        <span className='text-[#868F9A] text-[14px]'>{row.number}</span>
                                                    </span>

                                                </TableCell>
                                                <TableCell >

                                                    <div className="flex w-[250px] items-start justify-start gap-2">

                                                        <span className='text-[14px]'>  {row.title}  </span>

                                                        <Image
                                                            src="/assets/Icons/Attach.svg"
                                                            alt="Clip Image"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className=' w-[65px] '>
                                                        <span className='text-[#868F9A] text-[14px]'>{row.author}</span>
                                                    </div>

                                                </TableCell>
                                                <TableCell>
                                                    <div className="w-[24px]">
                                                        <span className='text-[14px]'>{row.numberOfPages}</span>
                                                    </div>

                                                </TableCell>
                                                <TableCell>
                                                    <div className="w-[54px]">
                                                        <span className='text-[14px]'>{row.annualMemberScore}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="w-[33px]">
                                                        <span className='text-[14px]'>{row.point}</span>
                                                    </div>

                                                </TableCell>
                                                <TableCell>
                                                    <div className="w-[135px]">
                                                        <span className='text-[#868F9A] text-[14px]'>{row.bulletInboardSource}</span>
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


                    <div className="flex flex-col w-[824] h-[89px] gap-[10px] pt-3">
                        <div className="flex flex-row items-start justify-start w-[824px] h-[28px] gap-[12px]">
                            <Checkbox defaultSelected color='default'><span className='text-[14px]'>포인트 사용</span></Checkbox>

                            <div className="flex flex-row items-center w-[400px] h-[28px] gap-[6px]">
                                <div className="flex items-center justify-center w-[68px] h-[28px] border border-[#E0E0E0] rounded-md text-[12px] text-[#868F9A]">
                                    0
                                </div>

                                <Button className="w-[37px] h-[28px] font-bold rounded-md text-[12px] bg-[#E0F1FF] text-[#42A8FD] flex items-center justify-center">
                                    확인
                                </Button>

                                <div className="w-[190px] h-[28px] flex items-center text-[12px] text-[#868F9A]">
                                    사용가능 : 2,000원
                                </div>
                            </div>



                        </div>

                        <div className="flex flex-row items-center justify-center w-[824px] h-[59px] border-t border-b gap-[40px] py-[8px] ">
                            <div className="flex flex-col items-center w-[52px] h-[43px]">
                                <p className='text-[14px]'>총 금액</p>
                                <p className='text-[16px] font-bold'>10,000</p>
                            </div>
                            <Image
                                src="/assets/Icons/Subtract.svg"
                                alt="Clip Image"
                                width={10}
                                height={10}
                            />
                            <div className="flex flex-col items-center w-[52px] h-[43px]">
                                <p className='text-[14px]'>포인트</p>
                                <p className='text-[16px] font-bold'>2,000</p>
                            </div>
                            <Image
                                src="/assets/Icons/EqualSign.svg"
                                alt="Clip Image"
                                width={10}
                                height={10}
                            />
                            <div className="flex flex-col items-center w-[62px] h-[43px]">
                                <p className='text-[14px]'>결제 금액</p>
                                <p className='text-[16px] font-bold text-[#8D64F8]'>8,000</p>
                            </div>
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

export default ShoppingCartAfterPoints;
