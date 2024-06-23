import React from 'react'
import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <>
    <div className='container'>
      <h1>CONTACT ME</h1>
      <div className='contact-items row'>
   
        <div className='items col-2'>
        <FaInstagramSquare />
        </div>
        
        <div className='items col-2'>
        <CiFacebook />
        </div>
        
        <div className='items col-2'>
        <CiLinkedin />
        </div>
        
        <div className='items col-2'>
        <FaSquareXTwitter />
        </div>

        <div className='items col-2'>
        <FaSquareGithub />
        </div>
        <div className='items col-2'>
        <SiGmail />
        </div>
        </div>
      </div>
      
    
    </>

  )
}

export default Footer
