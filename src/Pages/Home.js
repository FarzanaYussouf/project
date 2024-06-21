import { useState } from "react"
import React from 'react'
import "./Home.css"

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
            <h1 className="mb-3">PROJECTS</h1>
            <div className="row mt-5 mb-3">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {frontContent}
                                <img className="c-img" src="/images/redux.png" alt="" />
                            </div>


                            <div className="flip-card-back">
                                {backContent}
                                <p className="fs-5 text-start px-4 mt-1">Lorem ipsum dolor sit amet consectetur us ddkdd dolor sit amet ipsum try consectetur us .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

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
    )
};

export default FlipCard;

