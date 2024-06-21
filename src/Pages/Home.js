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
        <div>
            <h1 className="mb-3">PROJECTS</h1>
            <p className="fw-bold fs-4 text-start p-card px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea perferendis mollitia!sectetur adipisicing elit. Cupiditat sectetur adipisicing.</p>
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
            <div className="container mt-5">
                <div className=" row text-center">

                    <div className="col-1">
                        <img className="l-img ms-5" src="/images/expe.jfif" alt="" />
                    </div>
                    <div className="col-5">
                        <h1 className="me-5">My Experience</h1>
                    </div>

                    <div className="col-1">

                        <img className="l-img ms-5" src="/images/edu.jfif" alt="" />
                    </div>
                    <div className="col-5">

                        <h1 className="me-5">My Education</h1>

                    </div>
                </div>

                <div className="row ">
                    <div className="col-6">
                    <div className="container child-1">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="container child-1 ">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6">
                    <div className="container child-1">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="container child-1 ">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6">
                    <div className="container child-1">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="container child-1 ">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6">
                    <div className="container child-1">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="container child-1 ">
                        <div className="col-3 mt-3 text-start mx-5">
                            <p className="fw-bold">2022-present <br />
                                LeadDeveloper <br />
                                Lahore</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default FlipCard;

