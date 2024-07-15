import React from 'react'
import A65 from "../../../img/A65.png"
import A28 from "../../../img/asset 28.png"
import A29 from "../../../img/asset 29.png"
import A30 from "../../../img/asset 30.jpeg"
import A31 from "../../../img/asset 31.jpeg"
import A32 from "../../../img/asset 32.jpeg"
import A33 from "../../../img/asset 33.jpeg"
import { useNavigate } from 'react-router-dom';


import "./Discover.css"
function Discover() {
    const navigate = useNavigate();
    const handleClick = (route) => {
      navigate(route);
    };
    return (
        <>
            <div className=" relative   my-[160px]">

                <div className=" w-[42%] h-full object-cover  ">
                    <img src={A65} alt="" />
                </div>
                <div className=" flot-bob-y-1 left-[180px] top-[112px] absolute ">
                    <img src={A28} alt="" />
                </div>
                <div className=" flot-bob-y right-[120px] top-[50px] absolute ">
                    <img src={A29} alt="" />
                </div>

                
                <div className="container absolute top-[45%]  md:grid grid-cols-2 left-[7%] gap-3 p-[0px]" >
                    <div className='p-[28px]'>
                    <h6 className='   text-[28px] text-[#008fa8] font-semibold'>Discover creative</h6>
                        <h4 className='   pb-[20px] text-[25px] text-[#008fa8] font-semibold'>Work History</h4>
                        <h1 className="title-font sm:text-[30px] w-[100%]  pb-[8px]  font-semibold text-gray-900">
                            All The Things Customer Love
                        </h1>
                        <div className="title-bdr">
                            <div className="left-bdr bg-[#008fa8]"></div>
                            <div className="right-bdr"></div>
                        </div>
                        <p className="mb-8 leading-relaxed text-[21px] w-[100%] text-[#5f5f5f]">
                            Customer experience tools are not a panacea, but they can help companies delight customers and compete more effectively.
                        </p>

                        <span className=' text-xl block mb-8 pl-2 border-l-4 border-[#01569b]  text-[#008fa8]'>says Bain's Gerard du Toit </span>
               
                <button className="rounded-lg text-white py-2 px-5 text-[20px] bg-gradient-to-r from-[#17a2b8] to-gray-800"  onClick={() => handleClick("/contact")}>
                            More Portfolio
                        </button>
                    </div>
                    <div className=" relative " >
                        <div className="first-1  absolute top-[28px]  w-[32%] z-10 left-[4rem]  hidden md:block">
                            <img src={A30} alt="" className=''/>
                        </div>
                        <div className="first-1  absolute top-[4rem] left-[27rem] w-[21%] hidden md:block z-10">
                            <img src={A31} alt=""  className=" "/>
                        </div>
                        <div className="first-1 absolute top-15 left-[8.5rem] w-[25%] hidden md:block top-[86%] z-10 " >
                            <img src={A32} alt=""  className=" "/>
                        </div>
                        <div className="first-1  absolute h-[98%]  hidden md:block *:top-2 right-[0%]">
                            <img src={A33} alt=""  className='' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
