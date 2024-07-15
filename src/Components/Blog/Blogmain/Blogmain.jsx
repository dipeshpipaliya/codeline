import React from 'react'
import { useLocation } from 'react-router-dom';
import AB1 from "../../../img/about-1.png";
import AB3 from "../../../img/About-3.png";
import Mainblog from "../../../img/blog_vector_banner.png"
function Blogmain  ()  {

    const location = useLocation();
    const { title } = location.state || { title: "Default Title" };
    const { description } = location.state || { description: "Default Title" };
    const { imageUrl } = location.state || { imageUrl: "Default Title" };


    return (
        <div>
            <div className="bg-no-repeat pt-[170px] pb-[85px] relative bg-[length:100%_100%] top-[-186px] right-0" style={{ backgroundImage: `url(${AB1})` }}>
                <div className="md:grid grid-cols-2 px-[80px]">
                    <div className="py-6 relative flex">
                        <div className="flex items-center ">
                            <div className="z-10">
                                <h1 className="font-bold leading-[54px] text-[#008fa8] capitalize text-[42px]">{title}
                                </h1>
                                <p className="text-[20px] font-semibold text-[#008fa8] tracking-[1px]">We’d love to hear from you anytime</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={AB3} alt="" className='absolute top-[26%] w-[100%] left-[-60px]' />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img src={Mainblog} alt="" className='w-[50%]' />
                    </div>
                </div>
            </div>




            <div className="container  px-4 pt-4 pb-[140px]  h-[180vh]">
                <div className="md:grid grid-cols-2 gap-y-36 gap-x-12">
                    <div className=" relative  h-full" >
                        <div className=" rounded overflow-hidden shadow-lg w-full  ">
                            <div className="first-1">
                                <img src={imageUrl} alt=" " className="w-full " />
                            </div>
                            <div className="px-6 py-4 left-[1.5rem] w-[91%] absolute top-[72%] bg-white">
                                <h1 className="font-bold text-xl mb-2">{title}</h1>
                                <p className="text-gray-700 text-base">{description}</p>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Blogmain
