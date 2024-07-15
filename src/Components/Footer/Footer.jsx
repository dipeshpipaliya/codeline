import React from 'react'
import A68 from "../../img/footer-shape1.png"
import "./Footer.css"
import Footerlogo from "../../img/footerlogo.svg"
import { MdOutlinePhone, MdEmail } from "react-icons/md";
import { FaSkype, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="codeline_footer_area bg-cover bg-center" style={{ backgroundImage: `url(${A68})` }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-5 lg:gap-0  md:gap-0 px-5 text-white">
                <div className="pb-10 pt-20 ">
                    <img src={Footerlogo} alt="" className='w-1/2' />
                    <p className='pt-4 text-lg'>
                        Codeline infotech is a leading provider of cutting-edge information technology services and innovative solutions. We are committed to delivering transformative IT services that empower businesses to thrive in the digital age.
                    </p>
                </div>
                <div className="single-footer-widget pb-10 pt-20 px-4">
                <div className="line"></div>
                    <h3>We Provide</h3>
                    <ul className="pt-3 m-0 pl-0">
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>Web Development</a></li>
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>Mobile App Development</a></li>
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>UI/UX Design</a></li>
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>QA And Testing</a></li>
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>Maintenance Support</a></li>
                        <li><a href=" " className='text-white hover:text-[#008fa8]'>CMS Solution</a></li>
                    </ul>
                </div>
                <div className="single-footer-widget pb-10 pt-20 px-4">
                <div className="line"></div>
                    <h3>Quick Links</h3>
                    <ul className="pt-3 m-0 pl-0">
                        <li><a href="#" className='text-white hover:text-[#008fa8]'>About Us</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Our Services</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Contact</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Career</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Portfolio</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Privacy Policy</a></li>
                        <li><a href="" className='text-white hover:text-[#008fa8]'>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="single-footer-widget pb-10 pt-20 px-4 max-lg:px-5 ">
                <div className="line"></div>
                    <h3>Contact Info</h3>
                    <h6 className='pt-4 pb-3 text-xl'>HR Inquiry</h6>
                    <ul className="mb-3 p-0">
                        <li className='flex items-center pb-2'><a ><MdEmail /></a><a href="mailto:hr@codelineinfotech.com" className='pl-3 text-white mailto:hover:text-[#008fa8] xl:text-[15px] lg:text-[14px] md:text-[12px] '>hr@codelineinfotech.com</a></li>
                        <li className='flex items-center'>
                            <a><MdOutlinePhone /></a><a href="tel:+91 8155017575" className='pl-3 text-white hover:text-[#008fa8] lg:text-[12px] md:text-[12px]'>+91 8155017575</a></li> 
                    </ul>
                    <h6 className='pt-3 pb-3'>Sales Inquiry</h6>
                    <ul className="mb-3  p-0">
                        <li className='flex items-center pb-2'><a ><MdEmail /></a><a href="mailto:inquiry@codelineinfotech.com " className='pl-3 text-white mailto:hover:text-[#008fa8]  xl:text-[15px] lg:text-[14px] md:text-[12px]'>inquiry@codelineinfotech.com</a></li>
                        <li className='flex items-center'><a><FaSkype /></a><a href="mailto:hr@codelineinfotech.com" className='pl-3 text-white hover:text-[#008fa8] '>CodelineInfotech</a></li>
                    </ul>
                    <ul className="flex mt-4 space-x-2 pl-0 text-2xl text-[#4e6e8a] hover:text-white">
                        <li><FaFacebookSquare /></li>
                        <li><FaLinkedin /></li>
                        <li><FaSkype /></li>
                        <li><FaInstagramSquare /></li>
                        <li><MdEmail /></li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#042578] text-center py-3 text-white text-lg">
                ©2023 Codeline Infotech LLP. All Rights Reserved.
            </div>
        </div>



    )
}

export default Footer



