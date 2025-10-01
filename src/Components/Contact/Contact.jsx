import React from 'react'
import './Contact.css'
import gmailicon from '../../assets/gmail.png'
import phone from '../../assets/telephone.png'
import location from '../../assets/map.png'


const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "10b07b7b-02e6-4e88-8213-4c37ea8c9695");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return(
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Contact Me</h1>
                <p>I pursued the final years of my degree on a part-time.So I'm now looking for an IT position job</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={gmailicon} alt="" style={{width:"30px"}}/><p>kcasilva03@gmail.com</p>


                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="" style={{width:"30px"}}/> <p>+94 77 255 7133</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" style={{width:"30px"}}/><p>Aluthgama,Sri Lanka</p>
                    </div>
                </div>

            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email' />
                 <label htmlFor=''>Write your message here</label>
                 <textarea name='message'  rows="8" placeholder='Enter your message'></textarea>
                 <button type='submit' className="contact-submit">Submit now</button>

            </form>


        </div>
     

    </div>
  )
}

export default Contact