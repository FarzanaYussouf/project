import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import FlipCard from '../Pages/Home';
import Particles from 'react-tsparticles';
import Footer from './Footer';



const Navbar = () => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // const[IsDark,setIsDark]=useState(true)
  // const change=()=>{
  //     setIsDark(!IsDark)
  // }
  const [textColors, setTextColors] = useState(['#FF5733', '#FFC300', '#DAF7A6', '#C70039']);
  const [currentTextColor, setCurrentTextColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextColor((prevColor) => (prevColor + 1) % textColors.length);
    }, 1000); // Change text color every 1 second
   
    return () => clearInterval(interval); 
  }, [textColors]); 

 
     
      const TypewriterText = () => {
        const phrases = [
          "Welcome to my portfolio.",
          "I am a web developer.",
          "Passionate about React."
          // Add more phrases as needed
        ];
        const [currentPhrase, setCurrentPhrase] = useState(0);
        const [displayedText, setDisplayedText] = useState('');
        const [textIndex, setTextIndex] = useState(0);
        useEffect(() => {
          const timeout = setTimeout(() => {
            if (textIndex < phrases[currentPhrase].length) {
              setDisplayedText(prevText => prevText + phrases[currentPhrase][textIndex]);
              setTextIndex(prevIndex => prevIndex + 1);
            } else {
              setDisplayedText('');
              setTextIndex(0);
              setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
            }
          }, 100); // Typing speed (adjust as needed)
      
          return () => clearTimeout(timeout);
        }, [currentPhrase, textIndex]);
        return <span className="typewriter">{displayedText}</span>;
      }  
     
           
   
  return (
    <div>
  

 
      {/* <nav className="navbar"> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-black">
        <div class="container-fluid">
          {/* Your portfolio content goes here */}


          <div className="logo">
            <img className='logo-image' src="/images/logo.jfif" alt="" />
          </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class=" nav-links navbar-nav ms-auto me-auto mb-1 mb-lg-0 ">
        < li><a className='' href="#home">Home</a></li>
              <li><a className=' ' href="#about">About</a></li>

              <li><a className='' href="#contact">Contact</a></li>
            </ul>

            <button className='' onClick={toggleTheme}><i class={theme === 'light' ? "fa fa-moon-o" : "fa fa-sun-o"}></i></button>


          </div>
        </div>
      </nav>

      <div className={`App ${theme}`}>

        <div className="portfolio-container mb-5">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              {/* <button className='fs-4'>Welcome to my Portfolio</button> */}
             <div className="typewriter">   
      {/* <h2>{displayedText}</h2> */}
      <h2>Welcome to My Portfolio</h2>
      
      {/* <TypewriterText /> */}
  </div> 
    
    
              <h1 className="animated-text mt-4" style={{ color: textColors[currentTextColor] }}>THINK. MAKE. <br />SOLVE.</h1>
              <p>-What we Do</p>
             
              <p className='ptext text-start ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque iste iusto.</p>
              <button className=' btn btn-nav mt-4 mb-4'>Learn More</button>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='mt-5' src="/images/pic.jfif" alt="" />
           
   
            </div>
          </div>
        </div>
        <FlipCard/>
        <Footer/>
      </div>
      
    </div>










  )
}

export default Navbar


