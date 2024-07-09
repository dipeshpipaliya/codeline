import React, { useState, useEffect } from 'react';
import Cback from "../../../img/colright.png"
import "./Clock.css"
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Calculate degrees for each hand
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60 + seconds / 3600) / 12) * 360;
    return (
        <>

            <div>
                <div className=" text-center pb-[15px]">
                    <div className="">
                        <div className="Team-effect1"  >
                            <div className="bar bar-top"></div>
                            <div className="bar bar-right"></div>
                            <div className="bar bar-bottom"></div>
                            <div className="bar bar-left"></div>
                        </div>
                        <h6 className='py-4 text-[20px] text-[#008fa8] font-semibold'>GET IN TOUCH</h6>
                        <h1 className="title-font text-[28px] w-[100%]  pb-3 font-semibold text-gray-900">
                            Let’s Build Something Great TOGETHER
                        </h1>
                        <div className="Team-bdr">
                            <div className="left-bdr bg-[#008fa8]"></div>
                            <div className="right-bdr"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" bg-no-repeat  bg-size-42-100  py-[150px]
              " style={{ backgroundImage: `url(${Cback})` }} >
                <div className=" grid grid-cols-2">
                    <div className="px-[70px] ">
                        <div className="">
                            <div className="form-title-block">
                                <h2 className="form-title">Get in touch</h2>
                            </div>
                            <div className="">
                                <form className='py-16'>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Enter name here"
                                                required
                                                aria-required="true"
                                                className="w-full px-4 py-2 border rounded border-[#ced4da] "
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                                aria-required="true"
                                                className="w-full px-4 py-2  border rounded border-[#ced4da] "
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <select
                                                name="services"
                                                id="services"
                                                className="w-full px-4 py-2 border  rounded border-[#ced4da] "
                                            >
                                                <option value="Flutter">Flutter</option>
                                                <option value="Full Stack Development">Full Stack Development</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Ui/Ux">Ui/Ux</option>
                                                <option value="Web Development">Web Development</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <textarea
                                                name="message"
                                                placeholder="Message goes here"
                                                className="w-full px-4 py-4 border rounded border-[#ced4da] "
                                            ></textarea>
                                        </div>
                                        <div className="col-span-2">
                                            <button
                                                className="btn_primary px-6 py-3 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                                                type="submit"
                                                name="submit-form"
                                            >
                                                <i className="flaticon-next"></i> Send Your Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-message"></p>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="analog-watch-container">
                            <div className="watch-face">
                                {/* Hour hand */}
                                <div
                                    className="hand hour-hand"
                                    style={{
                                        transform: `rotate(${hourDegrees}deg)`,
                                    }}
                                />
                                {/* Minute hand */}
                                <div
                                    className="hand minute-hand"
                                    style={{
                                        transform: `rotate(${minuteDegrees}deg)`,
                                    }}
                                />
                                {/* Second hand */}
                                <div
                                    className="hand second-hand"
                                    style={{
                                        transform: `rotate(${secondDegrees}deg)`,
                                    }}
                                />
                                {/* Center dot */}
                                <div className="center-dot" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Clock
