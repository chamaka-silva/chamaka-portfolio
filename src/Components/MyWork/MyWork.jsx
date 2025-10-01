import React from 'react'
import './MyWork.css'
import employee from '../../assets/employeeimg.png'
import employeepdf from '../../assets/employee.pdf'
import busM from '../../assets/bus.jpg'
import buspdf from '../../assets/Bus.pdf'
import tuition from '../../assets/tuition.png'
import tuitionpdf from '../../assets/Tuition.pdf'
import queue from '../../assets/smartqueue.png'
import quequepdf from '../../assets/smartqueue.pdf'
import taskM from '../../assets/taskmanagement.jpg'
import taskpdf from '../../assets/Task Management.pdf'
import digging from '../../assets/digging.png'
import diggingpdf from '../../assets/DiggingDitection.pdf'
import IOT from '../../assets/IOT.jpg'
import IOTpdf from '../../assets/IOT.pdf'



const MyWork = () => {
  return(
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>

        </div>
        <div className="mywork-container">
            <div className="mywork-1">
                
                <h2>Employee Management System</h2>
                 <a href={employeepdf} target="_blank" rel="noopener noreferrer">
                <img src={employee} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-2">
                
                <h2>Bus Management System</h2>
                 <a href={buspdf} target="_blank" rel="noopener noreferrer">
                <img src={busM} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-3">
                
                <h2>Tuition Mobile App</h2>
                 <a href={tuitionpdf} target="_blank" rel="noopener noreferrer">
                <img src={tuition} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-4">
                
                <h2>Smart Queue Management System</h2>
                 <a href={quequepdf} target="_blank" rel="noopener noreferrer">
                <img src={queue} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-5">
                
                <h2>Task Management System</h2>
                 <a href={taskpdf} target="_blank" rel="noopener noreferrer">
                <img src={taskM} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-6">
              
                <h2>Digging Ditection System</h2>
                 <a href={diggingpdf} target="_blank" rel="noopener noreferrer">
                <img src={digging} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>

            <div className="mywork-7">
                
                <h2>IOT Study Monitoring System</h2>
                 <a href={IOTpdf} target="_blank" rel="noopener noreferrer">
                <img src={IOT} alt=""  style={{width:"400px",height:"250px"}}/>
                </a>
            </div>
        </div>
     

    </div>
  )
}

export default MyWork