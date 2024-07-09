import React from 'react'
import "./Work.css"
function Work() {
    return (
        <>
            <div className=" flex justify-center text-center py-[17px]">
                <div className="">
                    <div className="main-effect1"  >
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                    </div>
                    <h6 className='py-4 pl-4 text-[20px] text-[#008fa8] font-semibold'>HOW IT WORK</h6>
                    <h1 className="title-font sm:text-[25px] text-[26px] w-[80%] pl-[150px] pb-3 font-semibold text-gray-900">
                        Three Simple Step To Started Working Process
                    </h1>
                    <div className="main-bdr">
                        <div className="left-bdr bg-[#008fa8]"></div>
                        <div className="right-bdr"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
