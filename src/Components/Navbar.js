import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import FlipCard from '../Pages/Home';



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

  return (
    <div>


      {/* <nav className="navbar"> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          {/* Your portfolio content goes here */}


          <div className="logo">
            <img className='logo-image' src="/images/logo.jfif" alt="" />
          </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class=" nav-links navbar-nav me-auto mb-1 mb-lg-0 mx-5">
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
              <button className='fs-4'>Welcome to my Portfolio</button>
              <h1 className="animated-text mt-4" style={{ color: textColors[currentTextColor] }}>THINK. MAKE. <br />SOLVE.</h1>
              <p>-What we Do</p>
              <p className='ptext text-start ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque iste iusto.</p>
              <button className='btn btn-info mt-4 mb-4'>Learn More</button>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='mt-5' src="/images/pic.jfif" alt="" />

            </div>
          </div>
        </div>
        <FlipCard/>
      </div>
      
    </div>










  )
}

export default Navbar


