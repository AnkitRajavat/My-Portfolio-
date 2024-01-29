
import React from 'react'
import './Portfolio.css'
import aa from './aa.jpg'
import bb from './bb.jpg'
import cc from './cc.jpg'
import dd from './dd.jpg'
import ee from './ee.jpg'
import ff from './ff.jpg'



function Portfolio() {
  return (
    <div>
      <section className="portfolio" id="portfolio-loc">
        <h1>Portfolio</h1>
        <div className="portfolio-cards">
            <div className="portfolio-card">
                <img src={aa} alt=""/>
                <div className="overlay">
                    <h3>Linkedin Profile</h3>
                    <p>this is my Linkedin profile</p>
                    <a href="https://www.linkedin.com/in/ankit-kumar-rajavat-a41473203/"  target="_blank" alt ="#">
                    <button> See More </button></a>
                </div>
            </div>
            <div className="portfolio-card">
                <img src={bb} alt=""/>
                <div className="overlay">
                    <h3>Comptetive coding profile</h3>
                    <p>i solved 300+ data stucture and algorithms quuestion</p>
                    <a href=" https://auth.geeksforgeeks.org/user/ankitthakur682000" target="_blank" >
                    <button>See More </button>
                    </a>
                </div>
            </div>
            <div className="portfolio-card">
                <img src={cc} alt=""/>
                <div className="overlay">
                    <h3>My All projects</h3>
                    <p>I uploaded source code on Githib </p>
                    <a href =" https://github.com/AnkitRajavat?tab=repositories" target="_blank">
                    <button>See More </button>
                    </a>
                </div>
            </div>
            <div className="portfolio-card">
                <img src={dd} alt=""/>
                <div className="overlay">
                    <h3>Resume </h3>
                    <p>this resume contains all the educational and personl knowledge</p>
                    <a a href ="https://drive.google.com/file/d/1cAdNoaOWjJXYriK6W8oN79WuMfCOrZfe/view?usp=drive_link" target="_blank" >
                    <button>See More </button>
                    </a>
                   
                </div>
            </div>
            <div className="portfolio-card">
                <img src={ee} alt=""/>
                <div className="overlay">
                    <h3>certificates </h3>
                    <p>these are mine all certificates</p>
                    <a a href ="#" target="_blank" >
                    <button>See More</button>
                    </a>
                </div>
            </div>
            <div className="portfolio-card">
                <img src={ff} alt=""/>
                <div className="overlay">
                    <h3>GitHub profile</h3>
                    <p>open source coding profile</p>
                    <a a href ="https://github.com/AnkitRajavat" target="_blank" >
                    <button>See More</button>
                    </a>
                </div>
            </div>
        </div>
        
    </section>
   
    </div>
  )
}

export default Portfolio
