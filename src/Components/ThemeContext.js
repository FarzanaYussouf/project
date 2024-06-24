import React,{useState} from 'react'
import "./Theme.css"

const ThemeContext = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className='container-fluid'>
      <div className={`App ${theme}`}>
      <h1>My Portfolio</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Your portfolio content goes here */}
      
    </div>
    </div>
  )
}

export default ThemeContext

