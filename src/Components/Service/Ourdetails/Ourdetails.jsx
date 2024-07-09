import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDesignServices, MdComputer } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { SiSpeedtest } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const data = [
    {
        imges: <IoIosPhonePortrait />,
        title: "Mobile App Development",
        description: "Mobile app development services cover end-to-end development of mobile apps, from business analysOur mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies’ brand identity, and encourage business growth and expansion.Native Mobile App DevelopmentOur mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements.Hybrid Mobile App DevelopmentCross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies.Progressive Web App DevelopmentWith Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase.Wearables and Embedded SoftwareWe can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals.",
        linkText: "Read More",
    },
    {
        imges: <RiComputerLine />,
        title: "Web Development",
        description: "As a leading web development company, we always create robust, secure, custom web application with high scalability. According to the need of product, we use open source technology to develop a product with high quality standard. We help you stand out in this digital world by providing bespoke web development solutions.Custom Web ApplicationMany times a general off-the-shelf web solution might not fulfill the unique business requirements. That’s when custom web development becomes critical for optimal results. We here at Techuz help you build tailored web application for your specific business needs. We design contextual UI/UX for better usability, select the appropriate architecture for best performance and write custom code to incorporate your complex and unique business logic in your web application.Ecommerce DevelopmentWe understand the role of an efficient and feature-rich backend for a successful mobile application – that’s the reason the mobile backend we develop are not only high performing but also caters features that give ease of application management. We built custom APIs, develop your business logic and integrate admin tools that provide you more control over your mobile application. Our backend comes with sophisticated admin features that include – monitoring & analytics tools for understanding business and app KPIs, mobile user management tools such as the configuration of push notifications, surveys, app promotion, geolocation and other admin tools for content and data management. All your mobile backend needs are fulfilled by Techuz so that you can focus on enhancing your app’s frontend and business.Mobile Backend Developmentith Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase.Enterprise App DevelopmentWe develop enterprise-level applications that require intensive knowledge, research, innovative approach and cutting-edge technologies. To put it simply – we develop large-scale applications for huge businesses.Enterprise applications demand more, whether it be features, development standards or the development process. These web applications require a high level of security, coding standards, efficient project management and scalable infrastructure – and our web development team caters all these. At Techuz, we develop enterprise-level web applications using the Agile methodology and employ tools like Jira that makes project management more effective. We also comply with the best security practices – Open Web Application Security Project (OWASP) and deployment practices – CI/CD and automation testing. For high scalability and application monitoring, we set up auto-scaling and monitoring tools (Amazon CloudWatch) on popular servers like AWS and Google.",
        linkText: "Read More",
    },
    {
        imges: <MdOutlineDesignServices />,
        title: "UI/UX Design",
        description: "We, at CODELINE INFOTECH, understand the significance of good design in digital success. Our people-first, appealing, and pleasant designs address the needs of modern businesses and enterprises. We offer comprehensive UI/UX services that include branding, responsive web design, mobile app design, user experience consulting, and promotional designs using the latest tools and technologies.With a unique blend of modern technologies and innovative approaches, we create responsive and adaptive designs with uniform cross-platform compatibility. With our wide experience in the design industry, we are known for our creative passion and hands-on experience in all aspects of UI/UX. We understand what it takes to build a brand from the design perspective and help deliver the same using modern tools and ways of thinking. We help clients thrive by simplifying designs that can make a lasting impact on the mind of the users which in turn, increase brand awareness and loyalty .",
        linkText: "Read More",
    },
    {
        imges: <AiOutlineSolution />,
        title: "CMS Solution",
        description: "CMS which stands for Content Management System is used to develop data rich, manageable, responsive and creative web solutions. A well implemented open-source Content Management services lays the right platform to deliver useful information much more quickly and efficiently, generating business value for your business enterprise.Today as the world is evolving, the minds and ways of approaching the needs are also evolving. People prefer to get everything on one figure touch rather than visiting the outlets for purchasing. The technical heads that’s why introduce the concept of E-commerce. Our experts have high end experience in integrating highly secure Payment, creating shopping cart, customizing E-Commerce website, and product management.",
        linkText: "Read More",
    },
    {
        imges: <MdComputer />,
        title: "QA And Testing",
        description: "Software testing is a very critical step in the software development life cycle. It ensures that your business is running well. We are a team of experienced, seasoned and erudite software testing professionals who help you build flawless and better it systems with complete focus on end-user needs. We provide quality focused services to ensure that the software being tested is ideal for usage and there aren’t any performance issues which can affect the usability of effectiveness of the software.Our development projects are always released with extensive testing done on the software so you can easily managed and focused on the business. Our team possesses the capability of grasp the new skills and advanced knowledge fast. We ensure that our team stays abreast with all the latest developments in the field of testing to be able to offer our clients most comprehensive service with the testing tools.",
        linkText: "Read More",
    },
    {
        imges: <SiSpeedtest />,
        title: "Maintenance Support",
        description: "Software maintenance is the process of modifying a software product after it has been delivered to the customer. The main purpose of this process is to modify and update software application after delivery to correct faults and to improve performance. We providing software maintenance and support services so that our client can always focus on their core business functions.We found that company with technology spend 70% of their IT budgets on maintaining and their solutions. We have identified this business pain area and have resorted to provided maintenance and routine support tasks for software solutions. Our team pursues ongoing performance evaluation and tuning activities for applications under maintenance.We ensures that your systems are always up and running, supporting your day to day operations. With software maintenance we provide service like database backup, documentation, user support and others. ",
        linkText: "Read More",
    }
];

function Ourdetails() {
    const navigate = useNavigate();

    const handleClick = (title,description) => {
        navigate('/mobileDetails', { state: { title , description} });
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-7 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data.map((item, index) => (
                            <div key={index} className="p-4 translate-y-0 hover:translate-y-[-15px] duration-[0.4s] lg:w-1/3 " onClick={() => handleClick(item.title, item.description)}>
                                <div className="bg-gray-100 bg-opacity-75 px-4 py-12 rounded-lg overflow-hidden text-center relative">
                                    <div className="flex justify-center mb-5 text-[45px] text-[#008fa8]">
                                        {item.imges}
                                    </div>
                                    <h1 className="title-font text-[21px] font-medium text-gray-900 mb-3">
                                        {item.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="inline-flex text-[20px] items-center text-[#008fa8]">
                                        {item.linkText}
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ourdetails;
