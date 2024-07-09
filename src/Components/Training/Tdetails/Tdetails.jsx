import React from 'react'

import T01 from "../../../img/T01.jpg"
import T02 from "../../../img/T02.jpg"
import T03 from "../../../img/T03.png"
import T04 from "../../../img/T04.jpg"
import T05 from "../../../img/T05.jpg"
import T06 from "../../../img/T06.jpg"
import T07 from "../../../img/T07.png"


const blogs = [
    {
        imgSrc: T01,
        title: 'C/C++',
        description: 'C is a general-purpose, procedural computer programming language supporting structured programming,...',
   
    },
    {
        imgSrc: T02,
        category: 'UI/UX Design',
        title: 'The 400 Blows',
        description: 'UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product. While a UX...',
       
    },
    {
        imgSrc: T03,
        category: 'Node Js',
        title: 'Shooting Stars',
        description: 'Node.js is an open-source runtime environment that allows executing JavaScript outside of a web browser. Its...',
     
    },
    {
        imgSrc: T04,
        title: 'Flutter Development',
        description: 'Flutter development courses provide comprehensive training on creating cross-platform mobile applications usin...',
       
    },
    {
        imgSrc: T05,
        title: 'Android Development',
        description: 'Android Development courses teach students how to create mobile applications for the Android operating...',
     
    },
    {
        imgSrc: T06,
        title: 'React Js',
        description: 'React is a popular JavaScript library for building user interfaces. It allows developers to create dynamic, efficient,...',
      
    },
    {
        imgSrc: T07,
        title: 'Web Design',
        description: 'Web design is the process of creating visually appealing and user-friendly websites. It involves layout design, color...',
       
    },
];
function Tdetails() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {blogs.map((blog, index) => (
                            <div key={index} className="p-3 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.imgSrc} alt="blog" />
                                    <div className="py-3 px-3">
                                        <h1 className=" text-lg font-bold text-gray-900 mb-3">{blog.title}</h1>
                                        <p className="leading-relaxed text-[15px] mb-3 text-[#888]">{blog.description}</p>    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tdetails
