import { useState } from "react"
import React from 'react'
import "./Home.css"

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const handleFlip1 = () => {
        setIsFlipped1(!isFlipped1);
    };
    const handleFlip2 = () => {
        setIsFlipped2(!isFlipped2);
    }; const handleFlip3 = () => {
        setIsFlipped3(!isFlipped3);
    };

    return (
        <>
            <div id="projects">
                {/* flipcard */}
                <h1 className="mb-3">PROJECTS</h1>
                <p className="fw-bold fs-4  p-card px-5 ms-5 gradient-text">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                <div className="row mt-5 mb-3"
                    data-aos="fade-left"
                    data-aos-duration="1000">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/redux.png" alt="" />
                                </div>
                                

                                <div className="flip-card-back">
                                    {backContent}
                                    <h5>calculator</h5>
                                    <p className="fs-5 text-start px-4 mt-5 fw-bold">This is the project made with complete React js </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped1 ? 'flipped' : ''}`} onClick={handleFlip1}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/mern.png" alt="" />
                                </div>


                                <div className="flip-card-back">
                                    {backContent}
                                    <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped2 ? 'flipped' : ''}`} onClick={handleFlip2}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/figma.png" alt="" />
                                </div>


                                <div className="flip-card-back">
                                    {backContent}
                                    <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped3 ? 'flipped' : ''}`} onClick={handleFlip3}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/html.png" alt="" />
                                </div>


                                <div className="flip-card-back">
                                    {backContent}
                                    <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

               
               
            </div>
        </>
    )
};

export default FlipCard;

