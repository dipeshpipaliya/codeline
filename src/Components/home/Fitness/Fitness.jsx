import React from 'react'
import A34 from '../../../img/asset 34.png'
import A65 from '../../../img/asset 65.png'


function Fitness() {
    return (
        <>
            <div className=" grid grid-cols-2 pt-[100px]   pl-[60px]">
                <div className="">
                    <div className=" flex pb-6 pt-12">
                        <div className="">
                            <img src={A34} alt="" className=' w-[80px] h-[80px] rounded-[20px]' />
                        </div>
                        <div className=" pl-[24px]">
                            <h3 className='font-semibold  text-[26px]'>The Tailored Trainer</h3>
                            <h6 className='text-[#008fa8] font-medium text-[20px]'>fitness app</h6>
                        </div>
                    </div>
                    <p className=' text-[23px]  pr-[190px] leading-[38px]'>The Tailored Trainer App is the closest thing you’ll get to having a personal trainer in your pocket! You’ll have access to science-backed training plans that have been proven effective by a world class coach, with over 13 years of experience working with clients in the gym and online across the globe. So if you’re looking for a total body composition transformation, this app will provide you with the body composition focused training plans to help you lose fat, build muscle, and transform your physique. Your Coach, Cody McBroom,</p>
                </div>
                <div className=" bg-[#008fa8] pt-12 px-32">
                    <div className="">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[22px] text-white pl-5 tracking-wider'>Customized Workout Plans</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>
                    <div className=" py-20">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[22px] text-white pl-5 tracking-wider'>Tracking and Monitoring</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>
                    <div className="">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[22px] text-white pl-5 tracking-wider'>Habit Tracker</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>
                    <div className="py-20">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[22px] text-white pl-5 tracking-wider'>Interactive Video Tutorials</h6>
                        </div>
                        <div className=" w-[85px] h-[2px] bg-white "></div>
                    </div>
                    <div className="">
                        <div className=" flex pb-7 items-center ">
                            <img src={A65} alt="" className=' w-[10%]' />
                            <h6 className='text-[22px] text-white pl-5 tracking-wider'>Community Support</h6>
                        </div>
                     
                    </div>
                </div>
            </div>
 
        </>
    )
}

export default Fitness
