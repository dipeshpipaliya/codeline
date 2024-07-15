import React from 'react'
import logo from "../../img/asset 0.svg"
import A11 from "../../img/asset 11.svg"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handlePayNow = (route) => {
    switch (route) {
      case '/':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'service':
        navigate('/service');
        break;
        case 'portfolio':
          navigate('/portfolio');
          break;
      case 'career':
        navigate('/career');
        break;
      case 'training':
        navigate('/training');
        break;
        case 'blog':
          navigate('/blog');
          break;
          case 'contact':
            navigate('/contact');
            break;
            case 'get':
              navigate('/get');
              break;
      default:
        // Handle default case if needed
        break;
    }
  };

  return (
    <>
      <div className="flex  justify-between py-5 items-center  px-20  relative z-10 ">
        <div className=""> 
          <img src={logo} alt="" />
        </div>

        <ul className=' max-md:hidden'>
          <li className='font-bold text-[16px]  ' >
            <a href="" className='pr-6  text-white md:text-black ' onClick={() => handlePayNow('/')}>Home</a>
            <a href="" className='pr-6  text-white md:text-black' onClick={() => handlePayNow('about')}>About</a>
            <a href="" className='pr-6   text-white md:text-black' onClick={() => handlePayNow('service')}>Services</a>
            <a href="" className='pr-6   text-white md:text-black'  onClick={() => handlePayNow('portfolio')}>Portfolio</a>
            <a href="" className='pr-6   text-white md:text-black' onClick={() => handlePayNow('career')}>Career</a>
            <a href="" className='pr-6   text-white md:text-black' onClick={() => handlePayNow('training')}>Training</a>
            <a href="" className='pr-6   text-white md:text-black' onClick={() => handlePayNow('blog')}>Blog</a>
            <a href="" className='pr-6   text-white md:text-black ' onClick={() => handlePayNow('contact')}>Contact</a>
            <button className=' bg-gradient-to-r from-[#17a2b8] to-gray-800   rounded-lg  text-white py-2 px-4 '  onClick={() => handlePayNow('get')}>    Get in Touch</button>
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
