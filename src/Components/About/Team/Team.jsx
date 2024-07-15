import React from 'react'
import Cof1 from "../../../img/founder.jpg"
import Cof2 from "../../../img/Founder-2.png"
import { FaSkype, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import "./Team.css"
function Team() {
    return (
        <>
            <div className=" text-center py-[17px]">
                <div className="">
                    <div className="Team-effect1"  >
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                    </div>
                    <h6 className='py-4 text-[20px] text-[#008fa8] font-semibold'>OUR TEAM</h6>
                    <h1 className="title-font sm:text-[25px] text-[26px] w-[100%]  pb-3 font-semibold text-gray-900">
                        Meet Our Experts Always Ready To Help You
                    </h1>
                    <div className="Team-bdr">
                        <div className="left-bdr bg-[#008fa8]"></div>
                        <div className="right-bdr"></div>
                    </div>
                </div>
            </div>






            <section className="text-gray-600 body-font">
                <div className="container xl:px-5 py-24  max-lg:px-0 max-lg:py-5">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 text-center justify-evenly">
                        <div className="p-4  md:w-1/3 sm:mb-0 mb-6 rounded-lg hover:border hover:border-red-600 ">
                        <div className="relative ">
                                <img src={Cof1} alt="" className="w-full rounded-lg  max-lg:w-[100%]" />
                                <ul className=" flex  justify-around absolute top-[10px] left-[-7%] max-lg:top-[16px] max-md:left-[-4%]">
                                    <li className="pr-2 text-[28px] max-md:text-[35px] text-[#4e6e8a] hover:text-white"><FaFacebookSquare /></li>
                                    <li className="pr-2 text-[28px] max-md:text-[35px] text-[#4e6e8a] hover:text-white"><FaLinkedin /></li>
                                    <li className="pr-2 text-[28px] max-md:text-[35px]  text-[#4e6e8a] hover:text-white"><FaSkype /></li>
                                </ul>
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-4">Nevil Vaghasiya</h2>
                            <p className="text-base leading-relaxed mt-2 text-red-600 ">Founder & CEO</p>

                        </div>
                        <div className="p-4   md:w-1/3 sm:mb-0 mb-6 rounded-lg hover:border hover:border-[#13c4a1]">
                            <div className="relative ">
                                <img src={Cof2} alt="" className="w-full rounded-lg  max-lg:w-[100%] " />
                                <ul className=" flex  justify-around absolute top-[10px] left-[-7%] max-md:left-[-4%]">
                                    <li className="pr-2 text-[28px] max-md:text-[35px] text-[#4e6e8a] hover:text-white"><FaFacebookSquare /></li>
                                    <li className="pr-2 text-[28px] max-md:text-[35px] text-[#4e6e8a] hover:text-white"><FaLinkedin /></li>
                                    <li className="pr-2 text-[28px] max-md:text-[35px] text-[#4e6e8a] hover:text-white"><FaSkype /></li>
                                </ul>
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-4">Shailesh Balar</h2>
                            <p className="text-base leading-relaxed mt-2 text-[#13c4a1]">Chief Technology Officer</p>
                        </div>


                    </div>
                </div>
            </section>



        </>
    )
}

export default Team
