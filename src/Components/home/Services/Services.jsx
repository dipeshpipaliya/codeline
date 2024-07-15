import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Services.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaApple, FaCircle } from "react-icons/fa";

// img
import phonesdev from "../../../img/phoneimg.jpg";
import uiux from "../../../img/ui-ux-banner.png";
import web from "../../../img/web-development-banner.png";

const slideData = [
    {
        ser: "SERVICES",
        mob: "Mobile Development",
        sdata: "IOS Development",
        sdata1: "Android Development",
        sdata2: "Flutter Development",
        sdata3: "AR/VR Development",
        head: "Mobile App Development",
        pra: "Codeline infotech has dived deep in mobile app development, offering dynamic solutions to put business in a win-win situation with array of services.",
        btn: "Explore",
        img: phonesdev,
    },
    {
        ser: "SERVICES",
        mob: "Web Development",
        sdata: "IOS Development",
        sdata1: "Android Development",
        sdata2: "Flutter Development",
        sdata3: "AR/VR Development",
        head: "Web Development",
        pra: "We have copious experience in web development, creating apps that stand out in the crowd and streamline business solutions.",
        btn: "Explore",
        img: web,
    },
    {
        ser: "SERVICES",
        mob: "UI/UX & Graphic Design",
        sdata: "IOS Development",
        sdata1: "Android Development",
        sdata2: "Flutter Development",
        sdata3: "AR/VR Development",
        head: "UI/UX Design",
        pra: "We design visually stunning, engaging, meaningful & user-friendly customer experience for your target audience.",
        btn: "Explore",
        img: uiux,
    },
];

function Services() {
    return (
        <>
            <Swiper className="mySwiper">
                {slideData.map((slide, index) => (
                    <SwiperSlide key={index} className="swipe">
                        
                            <div className="md:grid grid-cols-2">
                                <div className="bg-[#f2f7fb] pl-[6em]">
                                    <div className="pt-20">
                                        <div className="title-effect">
                                            <div className="bar bar-top"></div>
                                            <div className="bar bar-right"></div>
                                            <div className="bar bar-bottom"></div>
                                            <div className="bar bar-left"></div>
                                        </div>
                                        <h6 className="sped pl-4 text-[20px] text-[#008fa8] font-semibold">
                                            {slide.ser}
                                        </h6>
                                        <h1 className="title-font sm:text-[25px] w-[89%] pb-[10px] font-semibold text-gray-900">
                                            {slide.mob}
                                        </h1>
                                        <div className="title-bdr">
                                            <div className="left-bdr bg-[#008fa8]"></div>
                                            <div className="right-bdr"></div>
                                        </div>
                                    </div>
                                    <div className="bullet-design d-table">
                                        <div className="flex items-center pt-[23px] pb-5">
                                            <div className="flex align-middle bg-white rounded-[73px] relative text-[35px] p-[16px]">
                                                <FaApple className="z-50 text-blue-800" />
                                                <span className="dots">
                                                    <FaCircle className="dot dot1" />
                                                    <FaCircle className="dot dot2" />
                                                    <FaCircle className="dot dot3" />
                                                </span>
                                            </div>
                                            <div className="d-table-cell align-middle">
                                                <h3 className=" pl-[19px] font-medium text-[20px]">
                                                    <a href="#" className="text-black no-underline">{slide.sdata}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-design d-table">
                                        <div className="flex items-center pb-5">
                                            <div className="flex align-middle bg-white rounded-[73px] relative text-[35px] p-[16px]">
                                                <FaApple className="z-50 text-blue-800" />
                                                <span className="dots">
                                                    <FaCircle className="dot dot1" />
                                                    <FaCircle className="dot dot2" />
                                                    <FaCircle className="dot dot3" />
                                                </span>
                                            </div>
                                            <div className="d-table-cell align-middle">
                                                <h3 className="pl-[19px] font-medium text-[20px]">
                                                    <a href="#" className="text-black no-underline">{slide.sdata1}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-design d-table">
                                        <div className="flex items-center pb-5">
                                            <div className="flex align-middle bg-white rounded-[73px] relative text-[35px] p-[16px]">
                                                <FaApple className="z-50 text-blue-800" />
                                                <span className="dots">
                                                    <FaCircle className="dot dot1" />
                                                    <FaCircle className="dot dot2" />
                                                    <FaCircle className="dot dot3" />
                                                </span>
                                            </div>
                                            <div className="d-table-cell align-middle">
                                                <h3 className="pl-[19px] font-medium text-[20px]">
                                                    <a href="#" className="text-black no-underline">{slide.sdata2}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-design d-table">
                                        <div className="flex items-center pb-5">
                                            <div className="flex align-middle bg-white rounded-[73px] relative text-[35px] p-[16px]">
                                                <FaApple className="z-50 text-blue-800" />
                                                <span className="dots">
                                                    <FaCircle className="dot dot1" />
                                                    <FaCircle className="dot dot2" />
                                                    <FaCircle className="dot dot3" />
                                                </span>
                                            </div>
                                            <div className="d-table-cell align-middle">
                                                <h3 className="pl-[19px] font-medium text-[20px]">
                                                    <a href="#" className="text-black no-underline">{slide.sdata3}</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-16">
                                        <h2 className="pb-[30px] text-[26px] font-semibold">
                                            {slide.head}
                                        </h2>
                                        <p className="pb-[29px] text-[19px] text-[#5f5f5f] translate-y-1">
                                            {slide.pra}
                                        </p>
                                        <button className="rounded-lg text-white py-2 px-4 bg-gradient-to-r from-[#17a2b8] to-gray-800">
                                            {slide.btn}
                                        </button>
                                    </div>
                                    <div className="">
                                        <div className="col-12 d-none d-lg-block section-wrapper overflow-visible">
                                            <div className="image-container flex justify-center relative">
                                                <div className="flex flex-wrap">
                                                    <div className="w-full px-2 animate__animated animate__fadeIn delay-1000ms z-50">
                                                        <img src={slide.img} alt="" className="object-cover w-full mix-blend-color-burn" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Services;
