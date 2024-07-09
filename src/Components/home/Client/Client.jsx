import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import A42 from "../../../img/asset 42.jpeg";
import A43 from "../../../img/asset 43.jpeg";
import A44 from "../../../img/asset 44.jpeg";
import A45 from "../../../img/asset 45.jpeg";
import A46 from "../../../img/asset 46.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Client.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Clients from "../../../img/clientimg.png";

function Client() {
    const swiperRef = useRef(null);

    const handleImageClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <>
            <div className="relative bg-no-repeat center my-[136px] w-full h-full" style={{ backgroundImage: `url(${Clients})` }} >
                <div className=" flex justify-center text-center py-[17px]">
                    <div className="">
                        <div className="client-effect"  >
                            <div className="bar bar-top"></div>
                            <div className="bar bar-right"></div>
                            <div className="bar bar-bottom"></div>
                            <div className="bar bar-left"></div>
                        </div>
                        <h6 className='py-4  text-[20px] text-[#008fa8] font-semibold'>TESTIMONIAL</h6>
                        <h1 className="title-font  text-[26px] w-[100%]  pb-3 font-semibold text-gray-900">
                        Our Client Say
                        </h1>
                        <div className="client-bdr">
                            <div className="left-bdr bg-[#008fa8]"></div>
                            <div className="right-bdr"></div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img src={A42} alt="" className='w-[100px] h-[100px] absolute top-[10.25rem] left-[8rem] bg-[#efecec] cursor-pointer' style={{ borderRadius: '25% 75% 40% 60% / 25% 30% 70% 75%' }} onClick={() => handleImageClick(0)} />
                    <img src={A43} alt="" className='w-[70px] h-[70px] absolute top-[50%] left-[15%] cursor-pointer' style={{ borderRadius: '25% 75% 40% 60% / 25% 30% 70% 75%' }} onClick={() => handleImageClick(1)} />
                    <img src={A44} alt="" className='w-[80px] h-[80px] absolute left-[100px] top-[80%] cursor-pointer' style={{ borderRadius: '25% 75% 40% 60% / 25% 30% 70% 75%' }} onClick={() => handleImageClick(2)} />
                    <img src={A45} alt="" className='w-[50px] h-[50px] absolute right-[22%] top-[84%] cursor-pointer' style={{ borderRadius: '25% 75% 40% 60% / 25% 30% 70% 75%' }} onClick={() => handleImageClick(3)} />
                    <img src={A46} alt="" className='w-[50px] h-[50px] absolute right-[17%] top-[54%] cursor-pointer' style={{ borderRadius: '25% 75% 40% 60% / 25% 30% 70% 75%' }} onClick={() => handleImageClick(4)} />
                </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    ref={swiperRef}
                >
                    <SwiperSlide>
                        
                        <div className="text-center px-[20%]">
                            <img src={A42} alt="" className='h-[120px] w-[120px] rounded-[100%] my-0 mx-auto' />
                            <p className="text-lg italic font-medium leading-8 text-[#212121] py-[10px]">
                                Thanks Codeline for great support on our project. They not only showed their commitment and hard work in our project, but also helped us take care of some points that got missed by us and did not belong to their scope. It is a great help if the objective is in making the service successful, instead of just completing the project.
                            </p>
                            <h6 className='text-[21px] text-[#042578] font-bold my-[20px]'>Jerry Lin</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center px-[20%]">
                            <img src={A43} alt="" className='h-[120px] w-[120px] rounded-[100%] my-0 mx-auto' />
                            <p className="text-lg italic font-medium leading-8 text-[#212121] py-[10px]">
                                Great work!!! The team was solid, efficient and knowledgeable. They did an amazing job on my very challenging app. I will be using them again. Thank you for doing such a great job!
                            </p>
                            <h6 className='text-[21px] text-[#042578] font-bold my-[20px]'>Jason Griffin</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center px-[20%]">
                            <img src={A44} alt="" className='h-[120px] w-[120px] rounded-[100%] my-0 mx-auto' />
                            <p className="text-lg italic font-medium leading-8 text-[#212121] py-[10px]">
                                Codeline Infotech provides a high standard of service. They are quick to address questions and concerns and produce quality work. We look forward to working with them in the future.
                            </p>
                            <h6 className='text-[21px] text-[#042578] font-bold my-[20px]'>Andrew Wright</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center px-[20%]">
                            <img src={A45} alt="" className='h-[120px] w-[120px] rounded-[100%] my-0 mx-auto' />
                            <p className="text-lg italic font-medium leading-8 text-[#212121] py-[10px]">
                                We got our APP delivered on time. Codeline is our technology partner and we are quite happy with the work. I see a great future for this company. Keep making happy clients.
                            </p>
                            <h6 className='text-[21px] text-[#042578] font-bold my-[20px]'>Rahul Singh</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center px-[20%]">
                            <img src={A46} alt="" className='h-[120px] w-[120px] rounded-[100%] my-0 mx-auto' />
                            <p className="text-lg italic font-medium leading-8 text-[#212121] py-[10px]">
                                Codeline Infotech has done a great job taking our company’s idea and developing a website as per our niche specifications. The team is technically strong and creative. I will not hesitate to recommend them.
                            </p>
                            <h6 className='text-[21px] text-[#042578] font-bold my-[20px]'>Dr.Daniel</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Client;
