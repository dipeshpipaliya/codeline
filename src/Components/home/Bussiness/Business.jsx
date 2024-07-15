

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Wave from "../../../img/wave.png";
import A62 from "../../../img/asset 62.svg";

import A20 from "../../../img/asset 20.svg";
import A21 from "../../../img/asset 21.svg";
import A22 from "../../../img/asset 22.svg";
import A23 from "../../../img/asset 23.svg";
import A24 from "../../../img/asset 24.svg";
import A25 from "../../../img/asset 25.svg";
import A26 from "../../../img/asset 26.svg";
import A27 from "../../../img/asset 27.svg";

import "./Business.css"

import Aos from 'aos'
import 'aos/dist/aos.css';

function Business() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [lastHoveredImage, setLastHoveredImage] = useState(0);

    const imageInfo = [
        { src: A20, top: '28%', left: '47%', text: 'Shared Hosting - Every customer manages their separate websites, emails, and databases. However, the server resources and costs are shared by all.' },
        { src: A21, top: '41%', left: '68%', text: 'Dedicated Hosting - Provides dedicated server resources for your website.' },
        { src: A22, top: '58%', left: '75%', text: 'Cloud Hosting - Offers scalable resources on demand.' },
        { src: A23, top: '77%', left: '68%', text: 'VPS Hosting - Virtual private server for more control.' },
        { src: A24, top: '90%', left: '48%', text: 'Managed Hosting - Fully managed services.' },
        { src: A25, top: '77%', left: '23%', text: 'Reseller Hosting - For reselling hosting services.' },
        { src: A26, top: '58%', left: '18%', text: 'WordPress Hosting - Optimized for WordPress.' },
        { src: A27, top: '40%', left: '27%', text: 'Colocation Hosting - Space for your own server hardware.' },
    ];

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
        setLastHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const navigate = useNavigate();
    const handleClick = (route) => {
      navigate(route);
    };

    return (
        <>
            <div className="bg-no-repeat py-[130px] bg-cover relative overflow-hidden" style={{ backgroundImage: `url(${Wave})` }}>
                <div className="container mx-auto md:grid grid-cols-2 px-0" >
                    <div data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className="title-effect">
                            <div className="bar bar-top"></div>
                            <div className="bar bar-right"></div>
                            <div className="bar bar-bottom"></div>
                            <div className="bar bar-left"></div>
                        </div>
                        <h6 className='py-4 pl-4 text-[20px] text-[#008fa8] font-semibold'>WHAT WE SERVE</h6>
                        <h1 className="title-font sm:text-[25px] w-[50%] pb-2 font-semibold text-gray-900">
                            We Are With You, Every Step Of The Way
                        </h1>
                        <div className="title-bdr">
                            <div className="left-bdr bg-[#008fa8]"></div>
                            <div className="right-bdr"></div>
                        </div>
                        <p className="mb-8 leading-relaxed text-[21px] w-[100%] text-[#5f5f5f]">
                            Whether you are looking for a personal website hosting plan or a business website hosting plan, we are the perfect solution for you. Our powerful website hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure website hosting platform.
                        </p>
                        <button className="rounded-lg text-white py-2 px-5 text-[20px] bg-gradient-to-r from-[#17a2b8] to-gray-800"  onClick={() => handleClick("/contact")}>
                            Start a project
                        </button>
                    </div>
                    <div className="main relative" data-aos="fade-left"
                      data-aos-easing="ease-in-sine"
                        data-aos-offset="500"
                        data-aos-duration="1000">

                        <div className="absolute top-[14.5rem] left-[10.5rem]  h-[15rem] overflow-hidden">
                            <img src={A62} alt="" className='w-full h-full object-cover' />
                            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-[1rem]  w-[95%] rounded-lg  bg-none">
                                <p  className='text-[15px]'>{hoveredImage !== null ? imageInfo[hoveredImage].text : imageInfo[lastHoveredImage].text}</p>
                            </div>
                        </div>
                        {imageInfo.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute transition-all duration-300 ${hoveredImage === index ? 'hovered' : 'not-hovered'}`}
                                style={{ top: img.top, left: img.left }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={img.src} alt="" className={`w-[36px] ${hoveredImage === index ? 'scale-125 filter-none' : 'filter grayscale'}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Business;
