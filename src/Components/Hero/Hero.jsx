import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import cv from '../../assets/cv.pdf'


const Hero = () => {
  return(
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Chamaka Abheetha</span> (Undergraduate) </h1>
        <h2>BSc (Hons) Computer Science</h2>
        <div className="hero-action">
            <div className="hero-connect"><a href='#contact'>Connect With Me</a></div>
            <div className="hero-resume">
              <a href={cv} target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>


    </div>
  )
}

export default Hero