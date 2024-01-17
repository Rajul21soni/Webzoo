import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsSkype } from "react-icons/bs";

const DefaultModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleWhatsAppButtonClick = () => {
    // Add your logic for handling WhatsApp button click
    console.log("WhatsApp button clicked");
    setOpen(false); // You can close the modal after handling the button click
  };

  const handleSkypeButtonClick = () => {
    // Add your logic for handling Skype button click
    console.log("Skype button clicked");
    setOpen(false); // You can close the modal after handling the button click
  };

  return (
    <>
      <button className="fixed right-4 bg-white text-2xl p-4 transition hover:scale-110 duration-[0.3s] rounded-lg hover:bg-black hover:text-white flex justify-center text-black bottom-4" onClick={showModal}>
        Contact Us
      </button>
      <Modal
        visible={open}
        onCancel={() => setOpen(false)} // Close the modal on cancel
        centered
        bodyStyle={{ backgroundColor: "white" }}
        footer={[
          <div key="buttons" style={{ textAlign: "center" }}>
            <h1 className="text-primary font-semibold text-4xl mt-5 font-plus-jakarta-sans">CONTACT US THROUGH</h1>
            <button className="p-5 hover:border hover:scale-110 transition ease-in-out duration-[0.3s]"  key="whatsapp" style={{ marginRight: 8 }} onClick={handleWhatsAppButtonClick}>
              <FaSquareWhatsapp className="text-6xl text-green-400"/>
            </button>
            <span className="text-3xl relative bottom-5">or</span>
            <button className="p-5 hover:border hover:scale-110 transition ease-in-out duration-[0.3s]" key="skype" style={{ marginLeft: 8 }} onClick={handleSkypeButtonClick}>
              <BsSkype className="text-6xl text-blue-400"/>
            </button>
          </div>,
        ]}
      />
    </>
  );
};

export default DefaultModal;
