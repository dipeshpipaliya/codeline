import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import first from "../../../img/asset 3.svg";
import second from "../../../img/asset 4.svg";
import third from "../../../img/asset 2.svg";
import four from "../../../img/asset 5.svg";

import A9 from "../../../img/asset 9.png";
import A8 from "../../../img/asset 8.png";
import A7 from "../../../img/asset 7.png";
import A6 from "../../../img/asset 6.png";

import A10 from "../../../img/asset 10.png"
import A11 from "../../../img/asset 11.svg"


export function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
  
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper "
      >
         <SwiperSlide>
          <div className=" grid  grid-cols-2 pt-[30px] pb-[100px]  px-[70px]  " >
            <div>
              <h2 className=" font-bold text-[37px] w-[68%]  text-[#232c42]">
                One Top Solution For All Your
                <span className="text-[#17a2b8]"> Business </span> Needs
              </h2>
              <p className=" py-[34px]  font-semibold">
                We know that good design means good business.
              </p>
              <button className="   rounded-lg  text-white py-2 px-4  bg-gradient-to-r from-[#17a2b8] to-gray-800">
                Start a project
              </button>
            </div>
            <div className="relative ">
              <img
                src={first}
                alt=""
                className="w-[20%] absolute top-[-30px]  left-0  animate-two"
              />
              <img
                src={second}
                alt=""
                className="w-[20%] absolute top-[11rem] left-11   animate-three "
              />
              <img
                src={third}
                alt=""
                className="w-[20%] absolute top-[-34px]  left-[14.75rem]  animate-bounce"
              />
              <img
                src={four}
                alt=""
                className="w-[30%] absolute top-[-34px]  left-[26rem]  animate-four"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" grid  grid-cols-2 pt-[30px] pb-[100px] px-[70px]">
            <div>
              <h2 className=" font-bold text-[36px] w-[68%]  text-[#232c42]">
                Stratagic Design And
                <span className="text-[#17a2b8]"> Technology Agency</span>
              </h2>
              <p className=" py-[34px] w-[74%]  font-semibold">
                We believe that designing products and services in close
                partnership with our clients is the only way to have a real
                impact on their business.
              </p>
              <button className="   rounded-lg  text-white py-2 px-4  bg-gradient-to-r from-[#17a2b8] to-gray-800">
                Start a project
              </button>
            </div>
            <div className="relative     top-[-67px] right-[34px]  ">
              <img
                src={A9}
                alt=""
                className="w-[100%] absolute top-0 left-[0rem]  "
              />
              <img
                src={A6}
                alt=""
                className="w-[12%] absolute top-[234px] left-[133px]  animate-two"
              />
              <img
                src={A7}
                alt=""
                className="w-[22%] absolute top-[3.17rem] left-[13rem]   animate-three "
              />
              <img
                src={A8}
                alt=""
                className="w-[12%] absolute top-[82px] right-[156px]  animate-four"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid  grid-cols-2 pt-[30px] pb-[100px] px-[70px]  ">
            <div>
              <h2 className=" font-bold text-[36px] w-[68%]  text-[#232c42]">
                Thinking The High Quality
                <span className="text-[#17a2b8]"> Software</span>
              </h2>
              <p className=" py-[34px] w-[74%]  font-semibold">
                Codeline is an all-new stylish Software For device that can show
                you things. awareness, drive traffic, connect with customers.
              </p>
              <button className="   rounded-lg  text-white py-2 px-4  bg-gradient-to-r from-[#17a2b8] to-gray-800">
                Start a project
              </button>
            </div>
            <div >
             <img src={A10} alt=""  className="  relative     left-[14px]  w-[75%]
    top-[-50px]"/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
<img src={A11} alt=""  className=" absolute  top-0   w-[67%] h-auto  z-0 right-0  overflow-hidden bg-cover  
    "/>
    </>
  );
}

export default Slider;
