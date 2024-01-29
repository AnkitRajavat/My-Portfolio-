import React from 'react'
import './Intro.css'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaInstagram } from "react-icons/fa";
import img from './rajavat.jpeg'
function Intro() {
  return (
    <div className='main1'>
      <div className='intro'>
      <h3>I'M <span>Ankit Rajavat</span><br></br>java  Developer & Web<br></br>Developer</h3>
      <button onClick={() => window.location.replace("/#contact-loc")}> Contact Me</button>
      </div>
      <div className='rajavat'>
         <img src ={img} alt=" "/>
         
      </div>
      <div className="icons">
      <a className="Linke" href="https://github.com/AnkitRajavat"  target="_blank"><DiGithubBadge /></a>
       <a className="Linke" href ="https://m.facebook.com/profile.php/?id=100009297461548"  target="_blank"> <FaFacebook /></a>
       <a className="Linke" href ="https:www.instagram.com/ankitrajavatofficial?!igsh==YzVkODRmOTdmMW=="  target="_blank"> <FaInstagram /></a>
       <a className="Linke" href ="https://www.linkedin.com/in/ankit-kumar-rajavat-a41473203/"  target="_blank"> <FaLinkedin /></a>
     </div>
    </div> 
   
  );
}

export default Intro
