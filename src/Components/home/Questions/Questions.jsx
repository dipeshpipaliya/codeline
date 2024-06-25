import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import A65 from "../../../img/A65.png";
import './Questions.css';

function Questions() {
    return (
        <>
            <div className="grid grid-cols-2 py-28 px-7">
                <div className="w-[100%] h-full object-cover bg-no-repeat py-6" style={{ backgroundImage: `url(${A65})` }}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse"> {/* Removed collapse and show classes */}
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is always visible.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse"> {/* Removed collapse class */}
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is always visible.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse"> {/* Removed collapse class */}
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is always visible.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="title-effect-right">
                        <div className="bar bar-top"></div>
                        <div className="bar bar-right"></div>
                        <div className="bar bar-bottom"></div>
                        <div className="bar bar-left"></div>
                    </div>
                    <h6 className="py-5 pl-4 text-[20px] text-[#008fa8] font-semibold">TAKE A LOOK</h6>
                    <h1 className="title-font sm:text-[25px] w-[100%] pb-5 font-semibold text-gray-900">Frequently Asked Questions</h1>
                    <div className="title-bdr-right">
                        <div className="left-bdr bg-[#008fa8]"></div>
                        <div className="right-bdr"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
