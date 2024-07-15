import React from 'react'
import A37 from '../../../img/asset 37.png'
import A65 from '../../../img/asset 65.png'

import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
function Signboards() {
    return (
        <>
            <div className=" grid grid-cols-2   pl-[60px]">
                
                <div className="">
                    <div className=" flex pb-6 pt-60">
                        <div className="">
                            <img src={A37} alt="" className=' w-[80px] h-[80px] rounded-[20px]' />
                        </div>
                        <div className=" pl-[24px]">
                            <h3 className='font-semibold  text-[26px]'>Signboards</h3>
                            <h6 className='text-[#008fa8] font-medium text-[20px]'>Find jobs easily</h6>
                        </div>
                    </div>
                    <p className=' text-[23px]  pr-[190px] leading-[38px]'>Signboards app offers a user-friendly platform to create and share text, images, GIFs, and videos with ease, enabling greater visibility and audience control.</p>
                </div>
                <div className=" bg-[#232c42] pb-12 pt-60 px-32">
                    <div className="">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[20px] text-white pl-5 tracking-wider'>Chat With Attendees</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>
                    <div className=" py-20">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[20px] text-white pl-5 tracking-wider'>Regular Updates of Events</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>


                    <div className="">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[20px] text-white pl-5 tracking-wider'>Also Works Offline</h6>
                        </div>

                    </div>
                     <div className="flex  py-[55px]">
                        <div className="w-[22%] mr-9 h-[85%]">
                            <IoLogoAndroid className=' list-none  bg-white rounded-full p-[12px]  table cursor-pointer text-[80px]   text-[#008fa8]' />
                        </div>
                        <div className=" w-[22%] mr-9 h-[85%]">
                            <FaApple className=' list-none  bg-white rounded-full p-[12px]  table cursor-pointer text-[80px] text-[#008fa8]' />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Signboards
