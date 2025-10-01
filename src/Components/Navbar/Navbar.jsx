import React, {useState,useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/underline.png'
import menu_icon from '../../assets/menu.png'
import close from '../../assets/close.png'


const Navbar = () => {

  const [menu,setMenu]= useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }


  return(
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_icon} onClick={openMenu} alt="" style={{width:"30px"}} className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close} onClick={closeMenu} alt="" style={{width:"30px"}} className='nav-mob-close'/>
            <li><a href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"?<img src={underline} alt=''style={{width:"15px"}}/>:<></>}</li>
            <li><a href='#about'><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about"?<img src={underline} alt=''style={{width:"15px"}}/>:<></>}</li>
            <li><a href='#services'><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services"?<img src={underline} alt=''style={{width:"15px"}}/>:<></>}</li>
            <li><a href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu==="work"?<img src={underline} alt=''style={{width:"15px"}}/>:<></>}</li>
            <li><a href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact"?<img src={underline} alt=''style={{width:"15px"}}/>:<></>}</li>
        </ul>
        <div className="nav-connect"><a href='#contact'>Connect With Me</a></div>

    </div>
  )
}

export default Navbar