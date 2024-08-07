import React from 'react'
import AB4 from "../../../img/About-4.png"
import AB5 from "../../../img/about-5.jpg"
import AB6 from "../../../img/about-6.jpg"
import AB7 from "../../../img/about-7.png"
import AB8 from "../../../img/about-8.jpg"



function Company() {
    return (
        <div>
            <section className="text-gray-600 body-font pb-10  ">
                <div className=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
                    <div className=" bg-no-repeat  relative bg-cover  pt-[100px] pb-[450px] w-[95%]  h-full " style={{ backgroundImage: `url(${AB4})` }}>
                        <img src={AB8} alt="" className='absolute top-[17%] left-[30%] w-[18%] rounded-md' />
                        <img src={AB5} alt="" className='absolute top-[44%] left-[15%] rounded-md  w-[35%] max-lg:w-[23%] max-lg:top-[50%] max-md:w-[26%] max-lg:md-[50%]' />
                        <img src={AB6} alt="" className='absolute top-[15%] left-[56%] w-[35%] max-lg:w-[23%]       max-md:w-[26%]  rounded-md' />
                        <img src={AB7} alt="" className='absolute top-[67%] left-[56%] w-[36%] max-lg:w-[28%] max-lg:left-[50%]  max-md:w-[32%] max-md:left-[50%] rounded-md' />
                        <div className='absolute top-[72%] left-[56%] w-[36%] max-lg:w-[32%] max-lg:left-[50%]   flex items-center  max-md:w-[32%] max-md:left-[50%]  gap-2 pl-6' >
                            <span className=' text-[54px]'>04</span>
                            <h5 className=' text-[26px]'>Years of Experience</h5>
                        </div>
                    </div>
                    <div className=" pl-14">
                        <div className="title-effect">
                            <div className="bar bar-top"></div>
                            <div className="bar bar-right"></div>
                            <div className="bar bar-bottom"></div>
                            <div className="bar bar-left"></div>
                        </div>
                        <h6 className=' pt-[21px] pb-[31px] pl-4 text-[20px] text-[#008fa8] font-semibold'>ABOUT COMPANY</h6>
                        <h1 className="text-left text-[29px] leading-[41px]  w-[65%] pb-[10px] font-semibold text-gray-900 capitalize ">Mission Is To Bring The Power Of AI To Every Business </h1>
                        <div className="title-bdr">
                            <div className="left-bdr  bg-[#008fa8]"></div>
                            <div className="right-bdr"></div>
                        </div>
                        <p className=" text-left mb-8 leading-relaxed text-[21px] font-semibold  w-[78%]">How all this mistaken idea of denouncing pleasure and praising born and we will give you a complete.
                            To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it but right to find fault with a man who chooses enjoy.</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Company
