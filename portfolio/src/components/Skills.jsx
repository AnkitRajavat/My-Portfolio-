import React from 'react'
import './Skill.css'


import cpp from './icon/c++.jpg'
import c from './icon/c.png'
import CssIcon from './icon/CssIcon'
import java from './icon/java.png'
import sprinboot from './icon/springboot.jpg'
import boot from './icon/boot.png'
import Git from './icon/Git'
import Html from './icon/Html'
import Js from './icon/Js'
import dsa from './icon/dsa.png'

import Mysql from './icon/Mysql'

import ReacrtIcon from './icon/ReacrtIcon'
function Skills() {
  return (
    <div>
      <section className="skills" id="skill-loc">
        <h1>My Skills</h1>
        < div className="cards">  
            <div className="skill-card">
                <img src={c} alt=" "></img>
                
                <h2>C programming</h2>
            </div>
            <div className="skill-card">
            <img src={cpp} alt=" "></img>
                <h2>C++</h2>
               
            </div> 
            <div className="skill-card">
                <img src ={java} alt =" "></img>
                <h2>java</h2>

            </div>
              <div className="skill-card">
                <img src ={dsa} alt =" "></img>
                <h2>Data structure & algo</h2>
                
            </div>
            <div className="skill-card">
               <img src ={sprinboot} alt =""></img>
                <h2>Springboot</h2>
            </div>
          
            <div className="skill-card">
            <Mysql/>
                <h2>MySQL</h2>
            </div>
            <div className="skill-card">
               <Html/>
                <h2>HTML</h2>
            </div>
            <div className="skill-card">
                <CssIcon/>
                <h2>CSS</h2>
            </div>
            <div className="skill-card">
              <img src ={boot} alt =" "></img>
                <h2>Bootstrap</h2>
            </div>
           
            <div className="skill-card">
               <Js/>
                <h2>JavaScript</h2>
            </div> <div className="skill-card">
                <ReacrtIcon/>
                <h2>ReactJS</h2>
            </div>
            <div className="skill-card">
                <Git/>
                <h2>GIT</h2>
            </div>
         </div>
            
            
           
        
    </section>
    </div>
  )
}

export default Skills
