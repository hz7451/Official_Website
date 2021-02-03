import React from 'react'
import './Hero2.css'

function Hero2({ headline, content }) {
    return (
        <div className="hero">
            <div className="content">
                <h2>{headline}</h2>
                <p>{content}</p>
            </div>
            <div className="waves" />
        </div>
    )
}

export default Hero2
