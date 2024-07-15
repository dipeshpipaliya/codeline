import React from 'react'
import S01 from"../../../img/S-1.png"
import S02 from"../../../img/S-2.png"
import S03 from"../../../img/S-table.png"
import S04 from"../../../img/S-cup.png"
import S05 from"../../../img/S-php.png"
import S06 from"../../../img/S-cplus.png"
import S07 from"../../../img/S-braket.png"
import S08 from"../../../img/S-braket2.png"
import S09 from"../../../img/S-search.png"
import S10 from "../../../img/S-shadow.png"

import AB3 from "../../../img/About-3.png"




import "./Ourservice.css"






function Ourservice() {
  return (
   <>
   
   
   <div className=" bg-no-repeat pt-[200px]  pb-[50px] relative  bg-[length:100%_100%]
         top-[-186px] right-0" style={{ backgroundImage: `url(${S01})` }}>
        <div className="grid grid-cols-2 px-[80px]" >
          <div className="py-6 relative flex">
            <div className="flex items-center ">
              <div className="z-10">
                <h1 className="font-bold leading-[54px] text-[#232c42] capitalize text-[42px]">Our <span className="text-[#008fa8]">Services </span></h1>
                <p className="text-[20px] font-semibold text-[#008fa8] tracking-[1px]">We’d love to hear from you anytime</p>
              </div>
            </div>
            <div className="">
              <img src={AB3} alt="" className='absolute top-[26%] w-[100%] left-[-60px]' />
            </div>
          </div>
          <div className="flex relative py-[200px]
             ">
        
            <div className="absolute top-[200px] z-10 left-[4rem]  ">
                <img src={S02} alt="" />
            </div>
            <div className="absolute left-[5.4rem] top-[115px]">
                <img src={S03} alt="" />
            </div>
            <div className="absolute left-[15.4rem] top-[16em]">
                <img src={S04} alt="" />
            </div>
            <div className="absolute left-[14.4rem] z-10 top-[0rem]">
                <img src={S10} alt="" />
            </div>
            <div className="absolute left-[14.6rem] top-[2rem] animate-smove">
                <img src={S05} alt="" />
            </div>
            <div className="absolute left-[21.6rem] top-[2rem] animate-smove z-10">
                <img src={S06} alt="" />
            </div>
            <div className="absolute left-[26.6rem] top-[7rem] animate-smove z-10">
                <img src={S09} alt="" />
            </div>
            <div className="absolute left-[30.6rem] top-[13rem] animate-smove z-10">
                <img src={S07} alt="" />
            </div>
            <div className="absolute left-[32.6rem] top-[5rem] animate-smove z-10">
                <img src={S08} alt="" />
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Ourservice
