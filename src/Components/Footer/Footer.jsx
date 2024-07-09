import React from 'react'
import A68 from "../../img/footer-shape1.png"
import "./Footer.css"
import Footerlogo from "../../img/footerlogo.svg"
import { MdOutlineEmail, MdOutlinePhone, MdEmail } from "react-icons/md";
import { FaSkype, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className=" codeline_footer_area bg-cover bg-center  " style={{ backgroundImage: `url(${A68})` }}>
                <div className="grid grid-cols-4 px-5 text-white">
                    <div className="  pb-[40px] pt-[100px] px-[20px] ">
                        <img src={Footerlogo} alt="" className='w-[50%]' />
                        <p className='pt-4 text-[18px]'>Codeline infotech is a leading provider of cutting-edge information technology services and innovative solutions. We are committed to delivering transformative IT services that empower businesses to thrive in the digital age.</p>
                    </div>
                    <div class="  single-footer-widget  pb-[40px] pt-[100px] px-[20px]">
                        <div class="line"></div>
                        <div className=" ">
                            <h3>We Provide</h3>
                            <ul class=" pt-3  px-0 m-0 [&_a]:block [&_a]:text-white [&_a:hover]:text-[#008fa8]">
                                <li className='py-2' ><a href=" ">Web Development</a></li>
                                <li className='py-2'><a href=" " >Mobile App Development</a></li>
                                <li className='py-2'><a href=" " >UI/UX Design</a></li>
                                <li className='py-2'><a href=" " >QA And Testing</a></li>
                                <li className='py-2'><a href=" " >Maintenance Support</a></li>
                                <li className='py-2'><a href=" " >CMS Solution</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="  single-footer-widget  pb-[40px] pt-[100px] px-[20px]">
                        <div class="line"></div>
                        <div className=" ">
                            <h3>Quick Links</h3>
                            <ul className=' pt-3 px-0 m-0 [&_a]:block [&_a]:text-white [&_a:hover]:text-[#008fa8]'>
                                <li className=' py-2 '> <a href="#">About Us</a></li>
                                <li className='py-2' > <a href=""> Our Services</a></li>
                                <li className='py-2'> <a href=""> Contact</a> </li>
                                <li className='py-2'> <a href="">  Career</a></li>
                                <li className='py-2'> <a href=""> Portfolio</a> </li>
                                <li className='py-2'> <a href=""> Privacy Policy</a> </li>
                                <li className='py-2'> <a href=""> Terms & Conditions</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div class=" single-footer-widget pb-[40px] pt-[100px] px-[20px]">
                        <div class="line"></div>
                        <h3 >Contact Info</h3>
                        <h6 className='pt-4  pb-3 text-[20px]'>HR Inquiry</h6>
                        <ul class="mb-3 px-0  [&_a]:block [&_a]:text-white [&_a:hover]:text-[#008fa8]">
                            <li className='flex items-center pb-2'><span> <MdOutlineEmail />
                            </span><a href="mailto:hr@codelineinfotech.com" className=' pl-3'> hr@codelineinfotech.com</a></li>
                            <li className='flex items-center'><span> <MdOutlinePhone /></span> <a href="tel:+91 8155017575" className=' pl-3'> +91 8155017575</a></li>
                        </ul>
                        <h3 className=' pb-3 pt-3'>Sales Inquiry</h3>
                        <ul class="footer-contact-list px-0 mb-3  [&_a]:block [&_a]:text-white [&_a:hover]:text-[#008fa8]">
                            <li className='flex items-center pb-2'><span> <MdOutlineEmail />
                            </span><a href="mailto:hr@codelineinfotech.com" className='pl-3'>             inquiry@codelineinfotech.com</a></li>
                            <li className='flex items-center pb-2'><span> <FaSkype />
                            </span><a href="mailto:hr@codelineinfotech.com" className='pl-3'>             CodelineInfotech</a></li>
                        </ul>
                        <ul class="socials d-flex mt-4 align-items-center justify-content-start flex-wrap-wrap pl-0">
                            <li className='pr-2 text-[28px] text-[#4e6e8a] hover:text-white'><FaFacebookSquare /></li>
                            <li className='pr-2 text-[28px] text-[#4e6e8a] hover:text-white'><FaLinkedin /></li>
                            <li className='pr-2 text-[28px] text-[#4e6e8a] hover:text-white'><FaSkype /></li>
                            <li className='pr-2 text-[28px] text-[#4e6e8a] hover:text-white'><FaInstagramSquare /></li>
                            <li className='pr-2 text-[30px] text-[#4e6e8a] hover:text-white' > <MdEmail />
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=" bg-[#042578] text-center py-[15px] text-white text-[17px]" >
                    ©2023 Codeline Infotech LLP. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer
