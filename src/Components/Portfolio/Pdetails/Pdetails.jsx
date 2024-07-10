import React, { useState } from 'react';
import P01 from "../../../img/P0-1.png";
import P02 from "../../../img/P0-2.png";
import P03 from "../../../img/P0-3.png";
import P04 from "../../../img/P0-4.png";
import P05 from "../../../img/P0-5.png";
import P06 from "../../../img/P0-6.png";
import flutter from "../../../img/flutter.svg";
import { Navigate, useNavigate } from 'react-router-dom';

const data = [
  { imges: P01, head: "Real Estate", pra: " User can use this real-estate app for conveniently purchasing Apartment, town-house, compound, PG etc.", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: P02, head: "EdSwipe", pra: " Business App for registered suppliers to do trade with Balaji Wafers Pvt. Ltd. and Suppliers can submit their quotes for active RFQs, View Upcoming RFQs...", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: P03, head: "Mursal Express", pra: " This mursal express app is basically used for fast online delivery of fresh vegetable, fruit, fast food, cookie and many other kind of miscellaneous and all. User just have to enter their mobile number and address to login and there is also one alternet option to register is by signin in google account or facebook account.Furthermore, user can select items from big basket as per their need and also add their favourite items in the cart. Finally, This application also provide order history that user have made in their profile.", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: P04, head: "Knowledgewood", pra: "Knowledgewood is basically learning app for students. After creating account by email-id user can view dashboard, Course, Tests, Slides and Membership section.", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: P05, head: "Synergy - Find Productive Friends", pra: "Have you been putting off that thing you need to do? The one that you promised you’d do weeks ago, but you never got to it. Now it’s stressing you out constantly and every time you think about doing it, you’d rather just scroll through social media until it’s 4:00 am.In comes Synergy. Synergy has a very simple concept: if you’re held accountable, you’ll get the work done. We match you with other users of the app who can help you be productive. These are all real people who, like you, are seeking to be more successful and get things done. Once you’re matched, you can chat with each other through the app aboutSo how does this magical app work? It’s quite simple! Create a quick bio in just a couple of minutes and start swiping through other users. That’s it", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: P06, head: "The Advisor", pra: "The Advisor is a community-based application for mobile phones with android operating system designed to protect you against all kinds of unwanted calls and to give ratings to those calls and other.", bt1: "Read More", btn2: "Flutter", category: "Mobile App" },
  { imges: " ", head: "Wilo-TV", pra: "WiLO-TV is a live streaming app that brings the outdoors to you and connects you with fellow outdoor enthusiasts from around the world.", bt1: "Read More", btn2: "Flutter", category: "Web Development" },
  { imges: " ", head: "Med Ed", pra: " This application use for online courses in form such as Blended Learning, Video Learning, Serial", bt1: "Read More", btn2: "Flutter", category: "Web Development" },
  { imges: " ", head: "ProsfinityVPN", pra: " Prosfinity provides VPN services for the wide world, including different VPN levels and onion over VPN, support multi-devices and easy to use, no logging record, 7 x 24 support for our customer and strongly security, various levels of VPN suitable for each layer demands, such as browse internet, video or communications even online game.", bt1: "Read More", btn2: "Flutter", category: "Web Development" },
  { imges: " ", head: "BOOKMRK - Delivery App", pra: " BOOKMRK Delivery app helps the delivery books to delivery the orders very efficiently to the Customers using Live Tracking features and OTP verification.Choose from the massive selection of Books, Stationary, Office Stationary and the best in-line stationery amongst other categories.It makes BOOKMRK a Special app for User with options to shop in BOOKMRK app like Shop by School, Shop by Publisher, Shop by Class & Shop by Subject", bt1: "Read More", btn2: "Flutter", category: "Web Development" },
  { imges: " ", head: "Oval", pra: "Have you been putting off that thing you need to do? The one that you promised you’d do weeks ago, but you never got to it. Now it’s stressing you out constantly and every time you think about doing it, you’d rather just scroll through social media until it’s 4:00 am.In comes Synergy. Synergy has a very simple concept: if you’re held accountable, you’ll get the work done. We match you with other users of the app who can help you be productive. These are all real people who, like you, are seeking to be more successful and get things done. Once you’re matched, you can chat with each other through the app aboutSo how does this magical app work? It’s quite simple! Create a quick bio in just a couple of minutes and start swiping through other users. That’s it", 
    bt1: "Read More", btn2: "Flutter", category: "Web Development" }
];

function Pdetails() {
  const [filter, setFilter] = useState("Show All");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const navigate = useNavigate();
  const handleClick = (imges ,head, pra) => {
    console.log('imges', imges)
    // return
    navigate("/portfolioorder", { state: {imges ,head, pra} })
   
};

  const filteredData = filter === "Show All" ? data : data.filter(item => item.category === filter);

  return (
    <div className="container">
      <div className="portfolio-outer-block">
        <div className="font-bold text-[20px]">
          <label className={`pr-6 ${filter === "Show All" ? 'active' : ''}`} onClick={() => handleFilterChange("Show All")}>Show All</label>
          <label className={`pr-6 tab-btn ${filter === "Mobile App" ? 'active' : ''}`} onClick={() => handleFilterChange("Mobile App")}>Mobile App</label>
          <label className={`pr-6 tab-btn ${filter === "UI/UX" ? 'active' : ''}`} onClick={() => handleFilterChange("UI/UX")}>UI/UX</label>
          <label className={`pr-6 tab-btn ${filter === "Web Development" ? 'active' : ''}`} onClick={() => handleFilterChange("Web Development")}>Web Development</label>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <div className={`grid grid-cols-2 py-10 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
          {index % 2 === 0 ? (
            <div>
              <img src={item.imges} alt=" " />
            </div>
          ) : (
            <div className="flex items-center">
              <div>
                <h5 className="text-[#008fa8] text-[35px] font-bold">{item.head}</h5>
                <p className="leading-6 text-lg mt-4 mb-4 overflow-hidden text-ellipsis h-18 text-gray-600 line-clamp-2">{item.pra}</p>
                <div className="flex">
                  <div  className="bg-gradient-to-r from-[#17a2b8] to-gray-800 rounded-lg text-white px-3 py-1 no-underline mr-5 text-[20px] cursor-pointer" onClick={()=>handleClick(item.imges, item.head, item.pra)}>{item.bt1}</div>
                  <a className="px-3 py-1 gredient-border flex items-center border-2 border-[] rounded-lg no-underline" href="#">
                    <img src={flutter} alt="Flutter" className="w-6 h-6" />
                    <h5 className="text-lg text-black pl-2 font-medium mr-2">{item.btn2}</h5>
                  </a>
                </div>
              </div>
            </div>
          )}
          {index % 2 === 0 ? (
            <div className="flex items-center">
              <div>
                <h5 className="text-[#008fa8] text-[35px] font-bold">{item.head}</h5>
                <p className="leading-6 text-lg mt-4 mb-4 overflow-hidden text-ellipsis h-18 text-gray-600 line-clamp-2">{item.pra}</p>
                <div className="flex">
                  <div className="bg-gradient-to-r from-[#17a2b8] to-gray-800 rounded-lg text-white px-3 py-1 no-underline mr-5 text-[20px] cursor-pointer" onClick={()=>handleClick(item.imges, item.head, item.pra)}>{item.bt1}</div>
                  <a className="px-3 py-1 gredient-border flex items-center border-2 border-[] rounded-lg no-underline" href="#">
                    <img src={flutter} alt="Flutter" className="w-6 h-6" />
                    <h5 className="text-lg text-black pl-2 font-medium mr-2">{item.btn2}</h5>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <img src={item.imges} alt=" " />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pdetails;
