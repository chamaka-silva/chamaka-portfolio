import React from 'react'
import  './About.css'
import aboutme_img from '../../assets/myabout.png'

const About = () => {
  return(
    <div id='about' className='about'>
     <div className="about-title">
        <h1>About Me</h1>
        
     </div>
     <div className="about-section">
     <div className="about-left"><img src={aboutme_img} alt="" style={{width:"300px",height:"70%"}} className='ab_img'/>
     </div>
     
     <div className="about-right">
        <div className="about-para">
            <p>I am a Computer Science undergraduate. I completed HND & Diploma in Software Engineering </p>  
            <p>Passionate about software development,technology and problem-solving,software and hardware
            troubleshooting,Database and network management.
            Building practical solutions that solve real-world problems.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>Technical Skills</p><hr style={{width :"90%"}} /><p>90%</p></div>
            <div className="about-skill"><p>IT System Knowledge</p><hr style={{width:"70%"}} /><p>80%</p></div>
            <div className="about-skill"><p>Web Development</p><hr style={{width:"75%"}} /><p>85%</p></div>
            <div className="about-skill"><p>Software Development</p><hr style={{width:"90%"}} /><p>90%</p></div>
            <div className="about-skill"><p>Networking & database Management</p><hr style={{width:"80%"}} /><p>80%</p></div>
        </div>
        </div>

     </div>

    </div>
  )
}

export default About