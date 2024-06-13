import React, { useState,useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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


      <nav className="navbar">

        
          {/* Your portfolio content goes here */}


          <div className="logo">
            <img className='logo-image' src="/images/logo.jfif" alt="" />
          </div>
          <ul className="nav-links ">
            < li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleTheme}><i class={theme === 'light' ? "fa fa-moon-o" : "fa fa-sun-o"}></i></button>
        
      </nav>
      <div className={`App ${theme}`}>
      <div className="portfolio-container">
      <h1 className="animated-text" style={{ color: textColors[currentTextColor] }}>Welcome to My Portfolio</h1>
      <p className='ptext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque iste iusto.</p>
      <button className='btn mt-5'>Learn More</button>
      
    </div>
    </div>
    </div>









  )
}

export default Navbar


