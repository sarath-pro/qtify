import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div id='hero-container'>
            <div>
                <div className='hero-text'>100 Thousand Songs, ad-free</div>
                <div className='hero-text'>Over thousands podcast episodes</div>
            </div>
            {/* <div> */}
            <img id='hero-image' src='assets/vibrating-headphone.png' alt='#' />
            {/* </div> */}
            
        </div>
    )
}

export default Hero