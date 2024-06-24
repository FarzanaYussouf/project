import React from 'react'
import"./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <>
    <div id='contact'
     data-aos="zoom-out-up"
     data-aos-duration="1000">
      <h3 className=' mt-5 mb-5 text-center gradient-text '>CONTACT ME</h3>
      <div className='contact-items'>
   
        <a className='items fs-1 me-4 '>
        <FaInstagramSquare />
        </a>
        
        <a className='items fs-1 me-4' >
        <CiFacebook />
        </a>
        
        <a className='items fs-1 me-4'>
        <CiLinkedin />
        </a>
        
        <a className='items fs-1 me-4'>
        <FaSquareXTwitter />
        </a>

        <a className='items fs-1 me-4'>
        <FaSquareGithub />
        </a>
        <a href='https://www.google.com' className='items fs-1 me-5'>
        <SiGmail />
        </a>
        </div>
      </div>
      
    
    </>

  )
}

export default Footer
