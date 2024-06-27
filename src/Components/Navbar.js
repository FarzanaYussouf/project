import React, { useState, useEffect, useRef } from 'react'
import "./Navbar.css"
import FlipCard from '../Pages/Home';

import Footer from './Footer';
import About from '../Pages/About';
import Typed from 'typed.js';



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
// const typedRef = useRef(null)
// useEffect(() => {
//   const options={
//     strings:[
//     "Welcome to my Profile",
//     "I am a Web Developer",
//     "Andriod Developer"],
//     typeSpeed:50,
//     backSpeed:50,
//     loop:true
//   }
//   const typed = new Typed(typedRef.current , options)
//   return()=>{
//   typed.destroy()
//   }
// },[])


  return (
    <>
    <div >
      {/* <div className='container'> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-black">
          <div className='container'
            data-aos="fade-right"
            data-aos-duration="1000"
          >



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

                <li><a className='' href="#projects">Projects</a></li>
                <li><a className='' href="#contact">Contact</a></li>
              </ul>
              <div>
                <button className='logo-btn'onClick={toggleTheme}><i class = {theme === 'light' ? "fa fa-moon-o" : "fa fa-sun-o"}></i></button>
              </div>
            </div>
          </div>
        </nav>
      </div>


      <div className=''id='home'
      >
        <div className={`App ${theme}`}>
         
          <div className="portfolio mb-5">


            <div className="typewriter col-12" >
    
            
                      <h1>Welcome to my Profile</h1>

            </div>

            <div className='row'  >
              <div className='col-lg-8 col-md-6 col-sm-6'>
                <h1 className="animated-text mt-4 " style={{ color: textColors[currentTextColor] }}>THINK. MAKE. <br />SOLVE.</h1>
                <p>-What we Do</p>

                <p className='ptext text-start ms-5 me-1 fw-bold'  data-aos="zoom-out-up"
               data-aos-duration="1000">
                I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people

                </p>
                <div className='col-12'>
                  <button className='btn btn-nav mt-4 mb-4'>Learn More</button>
                </div>
              </div>


              <div className='col-lg-4 col-md-4 col-sm-4'
             
             >
                <img className='mt-5 ms-5 pro-img' src="/images/img1.jfif" alt="" />
              </div>
            </div>

          </div>


          <FlipCard />
          <About />
          <Footer />
        </div>
      </div>
      




    </>










  )
}

export default Navbar


