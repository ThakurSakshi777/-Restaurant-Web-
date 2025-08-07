import React from 'react'
import {Link} from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'> ABOUT US</h1>
                    <p> The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>"We believe good food brings people together – and we’re here to help you enjoy it without the wait!"</p>
                <Link to ={"/"}> 
                Explore Menu
                <span>
                    <HiOutlineArrowNarrowRight/></span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About