import { useState } from "react"
import React from 'react'
import "./Home.css"

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
    const [isFlipped5, setIsFlipped5] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const handleFlip1 = () => {
        setIsFlipped1(!isFlipped1);
    };
    const handleFlip2 = () => {
        setIsFlipped2(!isFlipped2);
    }; 
    const handleFlip3 = () => {
        setIsFlipped3(!isFlipped3);
    };
    const handleFlip4 = () => {
        setIsFlipped4(!isFlipped4);
    };
    const handleFlip5 = () => {
        setIsFlipped5(!isFlipped5);
    };

    return (
        <>
            <div className="container">
                <div id="projects">
                    {/* flipcard */}
                    <h1 className="mb-3 mt-5 mb-5 text-center pro-text" data-aos="zoom-in-up"
                        data-aos-duration="1000">PROJECTS</h1>
                    <p className="fw-bold fs-4  p-card px-5 ms-5 gradient-text"
                        data-aos="fade-left"
                        data-aos-duration="1000">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>


                    <div className="row mt-5 mb-3"
                        data-aos="flip-left"
                        data-aos-duration="1000">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                                <div className="flip-card-inner">

                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/calculator.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-3 fw-bold">Calculator APP</h4>
                                        <p className="fs-5 text-start px-4 fw-bold">This is the project made with complete React js </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped1 ? 'flipped' : ''}`} onClick={handleFlip1}>

                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/ecom.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-3 fs-bold">Shopping APP</h4>
                                        <p className="fs-5 fw-bold text-start px-4 ">This is the project made with complete React js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped2 ? 'flipped' : ''}`} onClick={handleFlip2}>

                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/nft.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-3 fw-bold">NFT'S</h4>
                                        <p className="fs-5 fw-bold text-start px-4 mt-1">This is the project made with complete React js & CSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped3 ? 'flipped' : ''}`} onClick={handleFlip3}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/weather1.jfif" alt="" />
                                </div>


                                <div className="flip-card-back">
                                    {backContent}
                                    <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                                </div>
                            </div>


                        </div>
                    </div> */}
                    </div>
                    <div className="row mt-5 mb-3"
                        data-aos="zoom-out-up"
                        data-aos-duration="1000">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped3 ? 'flipped' : ''}`} onClick={handleFlip3}>

                                <div className="flip-card-inner">

                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/ama.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-3 fw-bold"> e-commerce APP</h4>
                                        <p className="fs-5 text-start px-4  fw-bold">This is the project made with complete React js & HTML </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped4 ? 'flipped' : ''}`} onClick={handleFlip4}>

                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/weather1.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-2 fw-bold">Weather APP</h4>
                                        <p className="fs-5 text-start px-4 fw-bold">This is the project made with complete React js and Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className={`flip-card ${isFlipped5 ? 'flipped' : ''}`} onClick={handleFlip5}>

                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        {frontContent}
                                        <img className="c-img" src="/images/adv.jfif" alt="" />
                                    </div>


                                    <div className="flip-card-back">
                                        {backContent}
                                        <h4 className="mt-2 fw-bold">Blogging APP</h4>
                                        <p className="fs-5 text-start px-4 fw-bold">This is the project made with complete React js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className={`flip-card ${isFlipped3 ? 'flipped' : ''}`} onClick={handleFlip3}>

                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {frontContent}
                                    <img className="c-img" src="/images/weather1.jfif" alt="" />
                                </div>


                                <div className="flip-card-back">
                                    {backContent}
                                    <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                                </div>
                            </div>


                        </div>
                    </div> */}
                    </div>
                </div>
            </div>

        </>
    )
};

export default FlipCard;

