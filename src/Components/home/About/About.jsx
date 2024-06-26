import React, { useEffect } from 'react'
import A17 from "../../../img/asset 17.png"
import A18 from "../../../img/asset 18.png"
import A19 from "../../../img/asset 19.png"

import "../About/About.css"
import Aos from 'aos'
import 'aos/dist/aos.css';
function About() {

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <section className="text-gray-600 body-font pt-11  ">
                <div className="container pl-[66px]  flex md:flex-row flex-col  w-full  items-center justify-between  ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative ">
                        <img src={A17} alt="" data-aos="zoom-in"   data-aos-duration="1000"/>
                        <img src={A18} alt="" data-aos="fade-right"  data-aos-duration="1000"  className='absolute top-0' />
                            <img src={A19} alt=""  data-aos="fade-up"  data-aos-duration="1000" className='absolute top-[206px] w-[53%] left-[98px] ' />
                     </div>
                    <div   className=" md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">

                        <div class="title-effect">
                            <div class="bar bar-top"></div>
                            <div class="bar bar-right"></div>
                            <div class="bar bar-bottom"></div>
                            <div class="bar bar-left"></div>
                        </div>
                        <h6 className=' pt-[21px] pb-[31px] pl-4 text-[20px] text-[#008fa8] font-semibold'>ABOUT US</h6>
                        <h1 className="text-left sm:text-[25px]  w-[89%] pb-[10px] font-semibold text-gray-900">Manage Conversations With Leads And Customers At Scale    </h1>
                        <div class="title-bdr">
                            <div class="left-bdr  bg-[#008fa8]"></div>
                            <div class="right-bdr"></div>
                        </div>
                        <p className= " text-left mb-8 leading-relaxed text-[21px]">Codeline infotech was found to deliver technology solution that positively impacted the business, versus just technology solutions that were technically excellent, but may not have delivered on the key business objectives. We achieve this through structured methodology that maps the business impact on every aspect of the technology solution being designed and developed.</p>

                    </div>
                </div>
            </section>


        </>
    )
}

export default About
