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
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {frontContent}
                        </div>
                        <div className="flip-card-back">
                            {backContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    export default FlipCard;

