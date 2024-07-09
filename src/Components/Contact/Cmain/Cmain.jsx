import React from 'react'
import AB1 from "../../../img/about-1.png"
import AB3 from "../../../img/About-3.png"
import Contactimg from "../../../img/contact-page-banner.png"
function Cmain() {
    return (
        <>
            <div className=" bg-no-repeat pt-[170px]  pb-[85px] relative  bg-[length:100%_100%]
       top-[-186px] right-0" style={{ backgroundImage: `url(${AB1})` }}>
                <div className="grid grid-cols-2 px-[80px]" >
                    <div className="py-6 relative flex">
                        <div className="flex items-center ">
                            <div className="z-10">
                                <h1 className="font-bold leading-[54px] text-[#232c42] capitalize text-[42px]">
                                    Contact <span className="text-[#008fa8]"> Us </span>
                                </h1>
                                <p class="text-[20px] font-semibold text-[#008fa8] tracking-[1px]">We’d love to hear from you anytime</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={AB3} alt="" className='absolute top-[26%] w-[100%] left-[-60px]' />
                        </div>
                    </div>
                    <div className="flex
             justify-end">
                        <img src={Contactimg} alt="" className='w-[72%] ' />
                    </div>
                </div>
            </div>

           

        </>
    )
}

export default Cmain
