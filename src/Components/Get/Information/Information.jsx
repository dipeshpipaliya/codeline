import React from 'react';
import right1 from "../../../img/colleft.png";
import InContact from "../../../img/colmeating.png";
import { FaLocationDot,} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Information() {
    return (
        <>
            <div
                className="bg-no-repeat bg-cover py-[150px] relative"
                style={{
                    backgroundImage: `url(${right1})`,
                    backgroundSize: '45% 100%',
                    backgroundPosition: 'right center'
                }}
            >
                <div className="grid grid-cols-2">
                    <div className="flex justify-center">
                        <div className="">
                            <div className="">
                                <div className="title-effect">
                                    <div className="bar bar-top"></div>
                                    <div className="bar bar-right"></div>
                                    <div className="bar bar-bottom"></div>
                                    <div className="bar bar-left"></div>
                                </div>
                                <h6 className="sped pl-4 text-[20px] text-[#008fa8] font-semibold">
                                    CONTACT INFORMATION
                                </h6>
                                <h1 className="title-font sm:text-[25px] w-[89%] pb-[10px] font-semibold text-gray-900">
                                    We’d Love To Hear From You Anytime
                                </h1>
                                <div className="title-bdr">
                                    <div className="left-bdr bg-[#008fa8]"></div>
                                    <div className="right-bdr"></div>
                                </div>
                            </div>

                            <div class="relative mb-6 shadow-[0px_0px_15px_rgba(4,37,120,0.21)] p-7 max-w-xs     overflow-hidden bg-white">
                                <div class="box d-flex align-items-center">
                                    <div className='text-[40px]  pr-4 text-[#37a7f1]'><FaLocationDot /></div>
                                    <div className=" font-semibold">
                                        <h4  >Location </h4>
                                        <p>Visit to explore the world</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[15px]" >
                                        <h5 className='text-[#008fa8] font-semibold'>Surat</h5>
                                        <a href="https://www.google.com/maps/place/Codeline+Infotech/@21.2136994,72.8851651,15z/data=!4m5!3m4!1s0x0:0x4fa4fd1fcc62c6cc!8m2!3d21.2136672!4d72.8850348" className='text-[#1d165c] hover:text-[#008fa8] no-underline font-semibold'>
                                            - 316 Anupam Business Hub, Yogi Chowk Road, Opp. Vijay Nagar, Surat, Gujarat 395006
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div class="relative mb-6 shadow-[0px_0px_15px_rgba(4,37,120,0.21)] p-7 max-w-xs     overflow-hidden bg-white">
                                <div class="box d-flex align-items-center">
                                    <div className='text-[40px]  pr-4 text-[#37a7f1]'><MdEmail /></div>
                                    <div className=" font-semibold">
                                        <h4  >Send a Mail</h4>
                                        <p>DON'T HESITATE TO MAIL</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[15px]" >
                                       
                                        <a href="mailto:info@codelineinfotech.com" className='text-[#1d165c] hover:text-[#008fa8] no-underline font-semibold'>
                                        info@codelineinfotech.com
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div class="relative mb-6 shadow-[0px_0px_15px_rgba(4,37,120,0.21)] p-7 max-w-xs     overflow-hidden bg-white">
                                <div class="box d-flex align-items-center">
                                    <div className='text-[40px]  pr-4 text-[#37a7f1]'><FaPhoneAlt /></div>
                                    <div className=" font-semibold">
                                        <h4  >Make a Call</h4>
                                        <p className='text-[14px]'>LET’S TALK WITH OUR EXPERTS</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[15px]" >
                                        <div class="text">
                                            <a href="tel:81550 17575" className='text-[#1d165c] hover:text-[#008fa8] no-underline font-semibold '>+91 81550 17575</a>
                                            <p className='text-[#1d165c] no-underline font-semibold '>Mon - Fri: 09.00 AM to 06.00 PM</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" flex items-center">

                        <img src={InContact} alt="" className='w-[90%]' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
