import React from 'react'
import Navigationbar from './Navigationbar'
import './Home.css';
import WebFooter from './WebFooter';
export default function About() {
  return (
    
    <div className='aboutbg'>
       <Navigationbar/>
      <div className='abouthead' style={{color:'black'}}> ABOUT GROCERS
      <p style={{color:'black'}}> Our mission is to increase the organic farming </p>
      </div>
      <div className='abg'>WH<span style={{colorRendering:'optimizeQuality'}}>O</span> WE ARE</div>
      
      <div className='aboutpara' >
      <p>Welcome to <span style={{color:'red'}}>GreenGrocers</span>, your one-stop shop for all things vegetables and fruits! 
          We're a passionate team dedicated to bringing you the freshest, 
          most delicious produce straight from the farm to your table.</p>
          <p>
          Choose your desired quantity for each item. We offer various options to fit your needs, from single units to bulk quantities.
Don't forget to check out our pre-made curated boxes for complete recipe solutions or seasonal favorites.
          </p>
      </div>
      <footer>
      <WebFooter/>
      </footer>
    


    </div>
  )
}
