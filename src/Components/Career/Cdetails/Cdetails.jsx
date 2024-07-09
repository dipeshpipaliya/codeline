import React from 'react'

function Cdetails() {
    return (
        <div>
            <div className=" text-center ">
                <div className="">
                    <div className="Team-effect1"  >
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                    </div>
                    <h6 className='py-4 text-[22px] text-[#008fa8] font-semibold'>CAREER AT CODELINE</h6>
                    <h1 className="title-font text-[36px] w-[100%]  pb-3 font-semibold text-gray-900">
                        Grow Your Career With Us
                    </h1>
                    <div className="Team-bdr">
                        <div className="left-bdr bg-[#008fa8]"></div>
                        <div className="right-bdr"></div>
                    </div>
                </div>
            </div>
            <div className=" px-[80px] py-[5rem]">
                <p className='text-lg font-medium'> Apply on : <a href="mailto:career@codelineinfotech.com" className='text-[#007bff]'>
                career@codelineinfotech.com</a></p>
            </div>
        </div>
    )
}

export default Cdetails
