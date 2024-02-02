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
import starz from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/starz.png'
import cumc from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/cumc.jpeg'
import solar from '/Users/ceydatopcu/Desktop/JADE Website/website/myportfolios/src/images/Screen Shot 2023-12-02 at 5.20.27 PM.png'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div id="nav">
    <h1 id="Name" className = "text">CEYDA TOPCU</h1>
    <img src={star} alt="Stars" className="star"/>
    
    <div className="navbar">
      <a href="#home" className = "headerText">PORTFOLIO</a>
      <a href="#about" className = "headerText">RESEARCH</a>
      <a href="#experience" className = "headerText">CONTACT</a>
      <a href="#contact" className = "headerText">CONTACT</a>
    </div>
   </div>



   <div className="custom-image-container">
    <img src={circlee} alt="Circle" className="auracircle"/>
    <img src={pfp} alt="React Image" className="pfp" /> 
  </div>
 
  <div id="content" className="section">

        <h2 id ="word">
          <p className="aboutblurb">
            Ceyda is pursuing a B.S. in Computer Science and a minor in Mathematics at 
            Columbia University, School of Engineering and Applied Sciences. 
          </p>
        </h2>
        {/*  home content goes here */
      
        }
      </div>
        
        <hr class="line" align="center" width="90%"/>
        <div id="home" className="section">
  
        <h2 className="homes">PORTFOLIO</h2>
        {/*  home content goes here */
             <div class = "row">
        <div class="column">
          <img src ={beezybody} alt = "React Image" style={{ width: '200px', height: '220px' }} />
          <p>Beezy-Body is a platform, puzzle game.</p>
        </div>
        <div class="column">
          <img src ={beezybody} alt = "React Image" style={{ width: '200px', height: '220px' }} />
          <p>Beezy-Body is a platform, puzzle game.</p>
        </div>
        <div class="column">
          <img src ={solar} alt = "React Image" style={{ width: '200px', height: '220px' }} />
          <p>Solar Cyberrush</p>
        </div>
      </div>
        }
      </div>
      <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2015</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2012</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2011</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2007</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>

   

      <div>
        {/*  about content goes here */}
      </div><div id="experience" className="section">
        <h2 className="homes">RESEARCH</h2>
        {/*  experience content goes here */
          <img src ={cumc} alt = "React Image" style={{ width: '200px', height: '220px' }} />

        }
      </div><div id="contact" className="section">
        <h2 className="homes">CONTACT</h2>
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

<div class="footer">
</div>


    </>

)
}

export default App; 