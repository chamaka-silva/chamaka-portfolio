import React from 'react'
import './Services.css'



const Services = () => {
  return(
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-data">
            <div className="service-1">
               <h3>01</h3> 
               <h2>IT Support and Troubleshooting</h2>
               <p>Hardware & software issue resolution (PCs, printers, POS machines)</p>
               <p>Network/Wi-Fi connectivity fixes</p>
               <p>Peripheral setup and maintenance</p>
                
             </div>

             <div className="service-2">
               <h3>02</h3> 
               <h2>Web Development</h2>
               <p>Responsive website design (JavaScript,CSS,React)</p>
               <p>Content updates & maintenance </p>
               <p>Basic SEO and website performance optimization</p>
                
             </div>

             <div className="service-3">
               <h3>03</h3> 
               <h2>Software Development</h2>
               <p>Custom software solutions</p>
               <p>Small automation tools to improve efficiency</p>
               <p>Database design & management (MySQL, SQL Server)</p>
                
             </div>

             <div className="service-4">
               <h3>04</h3> 
               <h2>Network & System Management</h2>
               <p>LAN/WAN setup and configuration</p>
               <p>Wi-Fi access point management (guest + staff)</p>
               <p>Server monitoring and backups</p>
                
             </div>

                
             </div>
        </div>


     

    
  )
}

export default Services