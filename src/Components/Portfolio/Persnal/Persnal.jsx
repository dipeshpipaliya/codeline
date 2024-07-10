
import { useLocation } from 'react-router-dom';
import Cback from "../../../img/colright.png";
import AB1 from "../../../img/about-1.png";
import AB3 from "../../../img/About-3.png";
import Contactimg from "../../../img/portfoli-01.png";
import { useEffect } from 'react';
function Persnal() {
  const location = useLocation();
  const { head, pra, imges } = location.state || []
  return (
    <>
      <div className="bg-no-repeat pt-[170px] pb-[85px] relative bg-[length:100%_100%] top-[-186px] right-0" style={{ backgroundImage: `url(${AB1})` }}>
        <div className="grid grid-cols-2 px-[80px]">
          <div className="py-6 relative flex">
            <div className="flex items-center">
              <div className="z-10">
                <h1 className="font-bold leading-[54px] text-[#232c42] capitalize text-[42px]">
                  Our <span className="text-[#008fa8]">Portfolio</span>
                </h1>
                <p className="text-[20px] font-semibold text-[#008fa8] tracking-[1px]">We’d love to hear from you anytime</p>
              </div>
            </div>
            <div>
              <img src={AB3} alt="" className="absolute top-[26%] w-[100%] left-[-60px]" />
            </div>
          </div>
          <div className="flex justify-end">
            <img src={Contactimg} alt="" className="w-[72%]" />
          </div>
        </div>
      </div>

      <div className="bg-no-repeat bg-size-[49%] py-[150px]" style={{ backgroundImage: `url(${Cback})` }}>
        <div className="grid grid-cols-2">
          <div className="px-[70px]">
            <div>
              <div>
                <div className="title-effect">
                  <div className="bar bar-top"></div>
                  <div className="bar bar-right"></div>
                  <div className="bar bar-bottom"></div>
                  <div className="bar bar-left"></div>
                </div>
                <h6 className="sped pl-4 text-[20px] text-[#008fa8] font-semibold">ABOUT PROJECT</h6>
                <h1 className="title-font sm:text-[25px] w-[89%] pb-[10px] font-semibold text-gray-900">Mission Is To Connects You With Fellow Outdoor</h1>
                <div className="title-bdr">
                  <div className="left-bdr bg-[#008fa8]"></div>
                  <div className="right-bdr"></div>
                </div>
              </div>
              <div>
                <h1 className="font-bold leading-[54px] text-[#008fa8] capitalize text-[42px]">{head}</h1>
                <ul className="m-0 pl-0 pt-[15px] [&_a]:block [&_a]:text-black [&_a:hover]:text-[#008fa8]">
                  <li className='text-[18px] mb-2'><span className="text-gray-700 font-bold text-lg">Project Category: </span>Flutter Mobile App</li>
                  <li className='text-[18px] mb-2'><a href="https://www.codelineinfotech.com"><span className="text-gray-700 font-bold text-lg">Website: </span>https://www.codelineinfotech.com</a></li>
                  <li className=" text-[18px] mb-2"><a href="https://play.google.com/store/apps/details?id=com.vd.properties247app&amp;hl=en-IN"><span className="text-gray-700 font-bold text-lg">Play Store: </span>https://play.google.com/store/apps/details?id=com.vd.properties247app&amp;hl=en-IN</a></li>
                  <li className=" text-[18px]"><a href="https://appstoreconnect.apple.com/login"><span className="text-gray-700 font-bold text-lg">App Store: </span>https://appstoreconnect.apple.com/login</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={imges} alt=" " className="w-full" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="pt-10">
          <p className='text-gray-700 text-base leading-6 mb-4'>{pra}</p>
          <div className="max-w-4xl mx-auto text-center p-8 shadow-xl mt-8 mb-10">
            <div className="quote-inner-block">
              {/* <img src="assets/images/quote11.svg" alt=""> */}
            </div>
            <p className="font-medium italic " >
              <q className=" text-[14px]">
                We, at CODELINE INFOTECH, understand the significance of good design in
                digital success. Our people-first, appealing,
                and pleasant designs address the needs of modern businesses and enterprises.
              </q>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Persnal
