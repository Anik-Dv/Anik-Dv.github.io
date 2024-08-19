import React from 'react'
import './css/hero.css'
import HeaderSocials from './HeaderSocials'

function Hero() {
    return (
        <>
            <section className='hero-section'>
                <div className='hero-content'>
                    <span className='hello-text'>HI, MY NAME IS</span>
                    <h1 className='hero-title'>Anik Krk.🤖</h1> 
                    <h1 className='hero-subtitle'>I'm a back-end Software Engineer. <span>&#x1F4BB;</span></h1>
                    <p className='hero-discription'> I’m a back-end software engineer specializing in building and writing business logic 👩‍💻
                        <br/> in software (and occasionally designing) exceptional digital experiences. &#128640; <br />
                        and also I like to build amazing Software & Web Application expriences for humans. &#128511;
                    </p>
                    <div className='cta-btn'>
                        <a href='#contact'>
                            <button className='hero-button'>Do You Want to Work With Me?</button>
                        </a>
                    </div>
                </div>
            <HeaderSocials />
            </section>
        </>
    )
}

export default Hero
