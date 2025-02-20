import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Section from '../Components/Section';
import Footer from '../Components/Footer';


const Home = () => {
    const [darkMode, setDarkmode] = useState(false);
  return (
    
    <div
    className="container"
    style={{justifyContent:"right",
      height: "",
      width: "",
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
    }}
    
  >
    <button className='button' style={{float:"right"}}
         onClick={()=>{
          setDarkmode(!darkMode);
      }} >
          Dark Mode
      </button>
      <Navbar/>
      <Section/>
      <Footer/>

  </div>
  )
}

export default Home