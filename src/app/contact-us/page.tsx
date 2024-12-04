"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

const ContactUs = () => {
  const {
    isOpen: isConfirmBtn,
    onOpen: onConfirmBtn,
    onOpenChange: onConfirmBtnChange,
  } = useDisclosure();

  return (
    <div className="min-h-screen">
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2" />

      <h2 className="mt-6 text-center text-[24px] font-semibold text-black">
        마이페이지
      </h2>

      <div className="flex items-center justify-center gap-6 mt-10">
        <label className="block text-base   font-bold ">제목</label>
        <Input
          type="text"
          variant="bordered"
          className="w-[70%] h-[40px] rounded-[6px]"
          placeholder="제목을 입력해 주세요"
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <label className="block text-base text-[#353A46] font-bold ">
          내용
        </label>
        <Textarea
          type="text"
          variant="bordered"
          className="w-[70%] rounded-[6px]"
          placeholder="문의하실 내용을 입력해 주세요"
          minRows={10}
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-10">
        <label className="block text-base text-[#353A46] font-bold ">
          이메일
        </label>
        <Input
          type="text"
          variant="bordered"
          className="w-[70%] h-[40px] rounded-[6px]"
          placeholder="idid123@aaa.com"
        />
      </div>

      <div className="flex items-center justify-center my-10">
        <Button
          className="py-4 px-36 rounded-md bg-[#42A8FD] text-white font-bold  "
          onClick={onConfirmBtn}
        >
          문의하기
        </Button>
      </div>

      <Footer />

      {/* Modal */}

      <Modal
        isOpen={isConfirmBtn}
        placement="center"
        onOpenChange={onConfirmBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[345px] px-10 pt-4 flex justify-center items-center "],
          body: ["w-full p-0 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="mt-3">
                  <p className="text-[#202124] text-center">
                    문의가 정상적으로 등록되었습니다
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-end gap-4">
                  <Button
                    className="rounded-[10px] bg-[#2376E5] text-white px-4 py-[12px] text-base font-bold"
                    onClick={() => {
                      onConfirmBtnChange();
                    }}
                  >
                    OK
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

export default ContactUs;
