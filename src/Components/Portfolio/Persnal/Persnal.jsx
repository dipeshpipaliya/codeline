
import { useLocation } from 'react-router-dom';
import Cback from "../../../img/colright.png";
import AB1 from "../../../img/about-1.png";
import AB3 from "../../../img/About-3.png";
import Contactimg from "../../../img/portfoli-01.png";
function Persnal() {
    const location = useLocation();
    const { head, pra, imges } = location.state || { title: "Default Title", description: "Default Description", imageUrl: "" };
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

      <div className="bg-no-repeat bg-size-42-100 py-[150px]" style={{ backgroundImage: `url(${Cback})` }}>
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
                <ul className="m-0 p-0 [&_a]:block [&_a]:text-black [&_a:hover]:text-[#008fa8]">
                  <li className="project-description"><span>Project Category: </span>Flutter Mobile App</li>
                  <li className="project-description"><a href="https://www.codelineinfotech.com"><span>Website: </span>https://www.codelineinfotech.com</a></li>
                  <li className="project-description"><a href="https://play.google.com/store/apps/details?id=com.vd.properties247app&amp;hl=en-IN"><span>Play Store: </span>https://play.google.com/store/apps/details?id=com.vd.properties247app&amp;hl=en-IN</a></li>
                  <li className="project-description"><a href="https://appstoreconnect.apple.com/login"><span>App Store: </span>https://appstoreconnect.apple.com/login</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={imges} alt=" " className="w-full" />
          </div>
        </div>
      </div>
      <div>
        <p>{pra}</p>
      </div>
    
    </>
  )
}

export default Persnal
