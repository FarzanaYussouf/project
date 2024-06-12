import React from 'react'
import"./Footer.css"
const Footer = () => {
  return (
    <div>
  <footer className="footer">
      <div className="color-change"></div>
      <div className="form-container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
    </div>
  )
}

export default Footer
