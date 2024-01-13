import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import beezybody from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/beezybodyy.png'
import star from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/star.png'
import pfp from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/unnamed.jpeg'
import circle from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/circle.png'
import circlee from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/circlee.png'
import github from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/bxl-github.png'
import linkedin from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/bxl-linkedin-square.png'
import email from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/envelope-regular-24.png'
import files from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/files.png'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div id="nav">
    <h1 id="Name" className = "text">CEYDA TOPCU</h1>
    
    
    <div className="navbar">
      <a href="#home" className = "headerText">ABOUT</a>
      <a href="#about" className = "headerText">PORTFOLIO</a>
      <a href="#experience" className = "headerText">RESUME</a>
      <a href="#contact" className = "headerText">CONTACT</a>
    </div>
   </div>



   <div className="custom-image-container">
    <img src={circlee} alt="Circle" className="auracircle"/>
    <img src={pfp} alt="React Image" className="pfp"/> 
  </div>
 
  <div id="content" className="section">

        <h2 id ="word">
          <p className="aboutblurb">
            Ceyda is pursuing a B.S. in Computer Science and a minor in Mathematics at 
            Columbia University, School of Engineering and Applied Science. As a first-generation student, Ceyda has found and is contuing to 
            utilize the resources around her to foster her passions, which include 
          </p>
        </h2>
        {/*  home content goes here */
      
        }
      </div>

        <div id="home" className="section">
        <h2>Home Section</h2>
        {/*  home content goes here */
      
        }
      </div>
      <div id="about" className="section">
        <h2>About Section</h2>
        {/*  about content goes here */}
      </div><div id="experience" className="section">
        <h2>Portfolio Section</h2>
        {/*  experience content goes here */
          <img src ={beezybody} alt = "React Image" width={100} height={120}/>

        }
      </div><div id="contact" className="section">
        <h2>Contact Section</h2>
        {/*  contact content goes here */
          <ul>
          <li>
            <a href="#">
              <i class="fab fa-edge">
                <a href="https://www.linkedin.com/in/ceyda-topcu-556161223/" target="_blank">
                <img src={linkedin} alt="linkedin" className="linkedin"/>
                </a>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-firefox">
              <a href="https://github.com/ceydat709" target="_blank">
              <img src={github} alt="github" className="github"/>
              </a>
              </i>
            </a>
            </li>
          <li>
            <a href="#">
              <i class="fab fa-chrome">
              <img src={email} alt="email" className="email"/>
              </i>
            </a>
            
          </li>
        </ul>
        }
      </div>
    </>

)
}

export default App; 