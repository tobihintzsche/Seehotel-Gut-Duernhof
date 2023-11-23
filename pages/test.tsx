// MyPage.js
import { DatePickerTest } from "@/components/HomePage/DatePickerTest";
import MyModal, { Modal } from "@/components/Modal";
import React, { useState } from "react";

const OpenButton = () => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded" type="button">
    Open Modal
  </button>
);

const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="button"
        onClick={handleButtonClick}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <DatePickerTest />
      </Modal>
    </div>
  );
};

export default MyPage;
