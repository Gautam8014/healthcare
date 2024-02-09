import React, { useState,useEffect } from 'react'
import {Link as RouterLink} from "react-router-dom"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // console.log(scrolled)
       // console.log(scrolled)
      if (scrolled > 20) {
        document.querySelector(".Navbar").style.backgroundColor = "black";
      }
        if(scrolled<20){
     
      document.querySelector(".Navbar").style.background= "rgb(34,11,56)";
     
     
  }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  let mylink=[
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Service",
        path: "/"
    },
    {
        title: "About",
        path: "/"
    },
    {
        title: "Blog",
        path: "/"
    }
   
  
  ]

  return (
    <div className="Navbar">
        {/* <img id='logo1' src={logo} alt=""  onClick={()=>navigate("/")} /> */}
      <div className={`nav-items ${isOpen && "open"}`}>
     


{
    mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
   }
      </div>
      <div id='btns'>
     
 
      <button id='register'  onClick={()=>navigate("/consultation")} >Book Now</button>
      </div>
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar