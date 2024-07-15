import React from 'react'
import Arrow from "../../../img/asset 70.svg"
// import A21 from "../../../img/asset 21.svg"
// import { FaRegLightbulb } from "react-icons/fa";
import A84 from "../../../img/image_2024_06_19T11_08_32_684Z-removebg-preview.png"
import A85 from "../../../img/image_2024_06_19T11_08_32_685Z-removebg-preview.png"
import A86 from "../../../img/image_2024_06_19T11_08_32_686Z-removebg-preview.png"

function Department() {
    const setData = [
        { image: A84, head: "Planning", text: 'Planning is essential aspect of working process. There’s always a step-by-step plan you follow to move from one stage to another. it’s universally vital to put things in order when kicking off a new project.' },
        { image: A85, head: "Development", text: 'In this phase the product development life cycle has brought you to the technical side of your project. You may call it the coding step, during which everything is set up for creating your app or website.' },
        { image: A86, head: "Launching", text: 'Finally, in this phase our project is ready to launch after gone through testing process and all. Launching a new project is always an exhilarating time.It’s the grand stage, where everyone’s efforts pay off.' }
    ]

    return (
        <>
            <div className="relative  max-md:h-[200vh] py-[135px]">
                <img src={Arrow} alt="" className="translate-x-16 w-[90%]" />

                <section className=" grid grid-cols-3  md:grid max-md:grid-cols-1   absolute top-[6rem] text-gray-600 body-font  gap-8 text-center px-16">
                    {
                        setData.map((data, index) => (
                            <div key={index} className="">
                                <div className="">
                                    <div className="h-25 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                                        <img src={data.image} className="w-[85%] h-full rounded-full object-cover bg-white border-solid max-md:w-12 max-md:h-12  " />
                                    </div>
                                    <div className="flex-grow pt-[18px]">
                                        <h2 className="text-gray-900 text-[22px] title-font font-semibold mb-3">{data.head}</h2>
                                        <p className="leading-relaxed text-base">{data.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default Department
