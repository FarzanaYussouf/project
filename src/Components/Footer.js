import React from 'react'
import"./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div id='contact'
     data-aos="zoom-out-up"
     data-aos-duration="1000">
      <h3 className=' mt-5 mb-5 text-center gradient-text '>CONTACT ME</h3>
      <div className='contact-items'>
   
        <Link to='https://www.instagram.com' className='items fs-1 me-4 '>
        <FaInstagramSquare />
        </Link>
        
        <Link to='https://www.facebook.com' className='items fs-1 me-4' >
        <CiFacebook />
        </Link>
        
        <Link to='https://www.linkedin.com' className='items fs-1 me-4'>
        <CiLinkedin />
        </Link>
        
        <Link to = 'https://www.google.com'className='items fs-1 me-4'>
        <FaSquareXTwitter />
        </Link>

        <Link to= 'https://www.github.com' className='items fs-1 me-4'>
        <FaSquareGithub />
        </Link>
        <Link to ='https://www.google.com' className='items fs-1 me-5'>
        <SiGmail />
        </Link>
        </div>
      </div>
      
    
    </>

  )
}

export default Footer
