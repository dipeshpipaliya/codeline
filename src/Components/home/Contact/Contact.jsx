import React from 'react'
import A47 from "../../../img/asset 47.png"
import A48 from "../../../img/asset 48.png"

function Contact() {
  return (
    <>
      <div className=" px-5 py-20 relative">
        <div className="  bg-[#f6f6f7]  text-center py-[14%]">
          <div className="left">
            <img src={A48} alt="" className='   absolute right-[54px] top-[21px]' />
            <img src={A47} alt="" className='   absolute left-[12px] top-[58%]' />
          </div>
          <div className=" flex justify-center">
            <div className=" w-[41%]">
              <h2 className='font-bold text-4xl leading-16 font-lobster-two  text-center leading-[3.5rem] pb-9'> <span className='text-[#008fa8]'>
                Contact  </span> Us For A Free <span className='text-[#008fa8]'>
                  Review   </span>
                Of Your Needs</h2>
              <button className="rounded-lg text-white py-2 px-5 text-[20px] bg-gradient-to-r from-[#17a2b8] to-gray-800">
                Red more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
