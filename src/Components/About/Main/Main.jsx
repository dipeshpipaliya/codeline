import React from 'react'
import AB1 from "../../../img/about-1.png"
import AB2 from "../../../img/about-2.png"
import AB3 from "../../../img/About-3.png"

function Main() {
  return (
    <>
      <div className=" bg-no-repeat pt-[170px]  md:w-[100%] pb-[100px] relative  bg-[length:100%_100%]
         top-[-186px] right-0" style={{ backgroundImage: `url(${AB1})` }}>
        <div className=" grid-cols-2 lg:grid px-[80px]" >
          <div className="py-6 relative flex">
            <div className="flex items-center ">
              <div className="z-10">
                <h1 className="font-bold leading-[54px] text-[#232c42] capitalize text-[42px]"> About <span className="text-[#008fa8]">Company </span></h1>
                <p className="text-[20px] font-semibold text-[#008fa8] tracking-[1px]">We’d love to hear from you anytime</p>
              </div>
            </div>
            <div className="">
              <img src={AB3} alt="" className='absolute top-[26%] w-[100%] left-[-60px]' />
            </div>

          </div>
          <div className="flex
               justify-end">
            <img src={AB2} alt="" className='w-[75%] ' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
