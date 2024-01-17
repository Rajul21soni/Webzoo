import React, { useState } from "react";
import addressImg from "../assets/address.svg";
import phoneImg from "../assets/phone.svg";
import clockImg from "../assets/clock.svg";
import Footer from "./Footer";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        id="contact"
        className="mx-auto container border rounded-xl w-full md:w-[100%] bg-black text-white"
        
      >
        <div className="text-center m-8 pb-9">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl mt-10 text-primary font-bold m-3">
            Get In Touch With Us
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 w-[90%] mx-auto">
          <div className="w-full col-span-2">
            <form>
              <div className="mb-10 flex gap-2 justify-center">
                <input
                  type="text"
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter name"
                  data-aos="fade-up" data-aos-duration="1000"
                />
                <input
                  type="email"
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter email"
                  data-aos="fade-up" data-aos-duration="1000"
                />
              </div>
              <div className="mb-10">
                <input
                  type="text"
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter subject"
                  data-aos="fade-up" data-aos-duration="1000"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter message"
                  cols="30"
                  rows="4"
                  data-aos="fade-up" data-aos-duration="1000"
                ></textarea>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-primary p-3 w-80  rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center"
                  data-aos="fade-up" data-aos-duration="1000"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className="flex flex-col md:flex-row  ">
            <div className="">
              <div className=" p-4 flex items-center">
                <img src={addressImg} alt="" className="mr-4" />
                <div className="border-l-2 pl-4">
                  <strong>Address</strong>
                  <p>Bellevue, USA</p>
                </div>
              </div>

              <div className=" p-4 flex items-center">
                <img src={phoneImg} alt="" className="mr-4 -ml-2" />
                <div className="border-l-2 pl-4">
                  <strong>Phone</strong>
                  <p>+1-206 717 5141</p>
                </div>
              </div>
              <div className=" p-4 flex items-center">
                <img src={clockImg} alt="" className="mr-4" />
                <div className="border-l-2 pl-4">
                  <strong>Working time</strong>
                  <p>support@torquevision.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
