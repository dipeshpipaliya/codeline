import React from 'react'
import logo from "../../img/asset 0.svg"
import A11 from "../../img/asset 11.svg"

function Navbar() {
  return (
    <> 
      <div className="flex  justify-between py-5 items-center  px-20   relative z-10">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <ul>
          <li className='font-bold text-[18px]' >
            <a href="" className='pr-6  text-white '>Home</a> 
            <a href="" className='pr-6  text-white'>About</a>
            <a href="" className='pr-6   text-white'>Services</a>
            <a href="" className='pr-6   text-white'>Portfolio</a>
            <a href="" className='pr-6   text-white'>Career</a>
            <a href="" className='pr-   text-white'>Blog</a>
            <a href="" className='pr-6   text-white '>Contact</a>
            <button className=' bg-gradient-to-r from-[#17a2b8] to-gray-800   rounded-lg  text-white py-2 px-4 '>    Get in Touch</button>
          </li>
        </ul>
        
  
      </div>
  {/* <img
         src={A11}
         alt=""
         className="slide-background absolute w-[80%] h-full  bg-cover right-0"
       /> */}

{/* <div className="bg-yellow-400  pb-20  sticky top-0  w-[55%]  left-[100%] "></div> */}
    </>
  )
}

export default Navbar
