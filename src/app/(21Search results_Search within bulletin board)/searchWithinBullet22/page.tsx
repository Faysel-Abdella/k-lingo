'use client';

import {useState, useMemo} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar2 from '@/components/Sidebar2';
import { Checkbox, Button } from "@nextui-org/react";
import {SearchT1}  from '@/assets/SearchT1';
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
    

const SearchWithinBullet = () => {
        const options = [
            { key: "1", label: "고1 모의" },      
        ]
        // Pagination Logic
        const [page, setPage] = useState(1); 

        const rowsPerPage = 15

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
    <div className="min-h-[2949px] flex flex-col items-center justify-between">
        <Header />
        <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


        {/* Sidebar and the right side */}
        <div className='flex flex-row  justify-between w-[1080px] h-[2570px] gap-[36px]'>
            {/* SideBar */}
            <Sidebar2 />

            {/* RightSide */}
            <div className='flex flex-col items-center justify-center w-[824px] h-[969px] pt-[24px] pb-[24px] gap-[40px]'>
                {/* Top */}
                <div className='flex flex-col items-center justify-center w-[824px] h-[86px] gap-[12px]'>
                    <div className='flex flex-col items-center justify-center w-[824px] h-[34px]'>
                        <h3 className='font-bold text-[24px]'>검색 결과</h3>
                    </div>

                    {/* Input and Button Row */}
                    <div className="flex flex-row items-center justify-center w-[564px] h-[44px] gap-[12px]">
                        {/* Dropdown */}
                        <DropDown
                            options={options}
                            defaultSelectedKeys='1'
                            selectStyles="w-[125px] h-full" 
                            insideStyles='px-[16px] rounded-md'
                        />

                        {/* Input Field */}
                        <InputNoLabel
                            placeholder="사미인곡"
                            inputParentStyles="w-[353px] h-full rounded-md px-[16px]"
                        />
                        
                        {/* Button */}
                        <Button className="w-[64px] h-full px-[20px] bg-[#ECEDF1] text-[#868F9A] rounded-md">
                            검색
                        </Button>
                    </div>
                </div>

                
                <div className='flex flex-col items-center justify-center w-[824px] h-[795px] gap-[1px] pt-10'>

                    <div className='flex flex-row items-start justify-start pl-3 min-w-[824px] h-[20px]'>
                        <h3 className=' text-[#868F9A] text-[14px]'>검색어<span className='text-[#8D64F8]'>(사미인곡)</span>으로 검색한 결과</h3>
                    </div>

                    {/* Bottom  */}
                    <div className='max-w-[824px] h-[795px] gap-[10px]'>
                        <article className="">
                            <Table
                                aria-label="Data Table"
                                shadow="none"
                                classNames={{
                                    wrapper: "min-w-[824px] max-h-[1000px]",
                                }}
                                bottomContent={
                                    <div className="flex flex-col items-center justify-center w-full gap-[40px]">
                                        {/* Existing Button Container */}
                                        <div className="flex flex-row items-center justify-between w-[462px] h-[42px] mb-4">
                                            <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[24px] bg-[#42A8FD] text-white flex items-center">
                                                <Image
                                                    src="/assets/Icons/whiteBag.svg"
                                                    alt="Clip Image"
                                                    width={20}
                                                    height={20}
                                                />
                                                선택파일 장바구니 담기
                                            </Button>
                                            <Button className="w-[221px] h-[42px] font-bold rounded-md py-[10px] px-[20px] bg-[#42A8FD] text-white flex items-center">
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
                                        {/* <div className="flex flex-row items-center justify-between w-[328px] h-[40px] "> */}
                                            {/* Input Field */}
                                            {/* <InputNoLabel
                                                placeholder="사미인곡"
                                                inputParentStyles="w-[252px] rounded-md  px-[16px] h-[40px] "
                                            /> */}
                                            
                                            {/* Button */}
                                            {/* <Button className="w-[64px] h-full px-[20px] py-[10px] bg-[#ECEDF1] text-[#868F9A] rounded-md"> */}
                                                {/* 검색 */}
                                            {/* </Button> */}
                                        {/* </div> */}
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

                                <TableColumn ><span className='w-[55px]'>번호</span></TableColumn>
                                <TableColumn ><span className='w-[320px]'>제목</span></TableColumn>
                                <TableColumn ><span className='w-[65px]'>작성자</span></TableColumn>
                                <TableColumn ><span className='w-[21px]'>쪽수</span></TableColumn>
                                <TableColumn ><span className='w-[21px]'>연회원 점수</span></TableColumn>
                                <TableColumn ><span className='w-[21px]'>포인트</span></TableColumn>

                    
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
                                        <span className='text-[#868F9A] w-[50px]'>
                                            {row.number}
                                        </span>
                                        
                                    </TableCell>
                                    <TableCell >
                                    
                                        <div className="flex w-[311px] items-start justify-start gap-2">
                                        <span>
                                            <div className='flex items-center justify-center gap-2'>
                                                <span className='text-[#8D64F8]'>
                                                    사미인곡
                                                </span>
                                                <span>  {row.author}  </span>                                        

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
                                        <span className='text-[#868F9A] w-[60px]'>
                                        {row.author}
                                        </span>
                                        
                                    </TableCell>
                                    <TableCell className='w-[21px]'><span className='w-[21px]'>{row.numberOfPages}</span></TableCell>
                                    <TableCell className='w-[21px]'><span className='w-[21px]'>{row.annualMemberScore}</span></TableCell>
                                    <TableCell className='w-[21px]'><span className='w-[21px]'>{row.point}</span></TableCell>

                                    
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
        </div>


        <Footer />
      
    </div>
  )
}

export default SearchWithinBullet;

 // th: [
                            //     "relative px-[40px] py-[10px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] w-full max-w-[824px] overflow-x-auto h-[41px] ",
                            //     // "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                            // ],
                            // td: ["py-[10px]  w-full max-w-[824px] overflow-x-auto h-[40px] px-[20px] text-[14px] text-center font-normal text-base text-[#363941] "],