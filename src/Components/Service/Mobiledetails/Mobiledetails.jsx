import React from 'react';
import { useLocation } from 'react-router-dom';
import AB1 from "../../../img/about-1.png";
import AB3 from "../../../img/About-3.png";
import Mdata from "../../../img/mobiledataph.png";

const Mobiledetails = () => {
    const location = useLocation();
    const { title } = location.state || { title: "Default Title" };
    const { description } = location.state || { description: "Default Title" };


    return (
        <>
            <div className="bg-no-repeat pt-[170px] pb-[85px] relative bg-[length:100%_100%] top-[-186px] right-0" style={{ backgroundImage: `url(${AB1})` }}>
                <div className="grid grid-cols-2 px-[80px]">
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
                        <img src={Mdata} alt="" className='w-[50%]' />
                    </div>
                </div>
            </div>

          
          
            <div className="other-detail-page-description-block flex flex-col items-center">
                <p className="detail-para"></p>
                <p className="detail-para text-black text-[15px] leading-[24px] tracking-[0.5px] font-sans mb-7 w-3/4 flex justify-center">
                { description }
                </p>
                
            </div>
        </>
    );
}

export default Mobiledetails;
