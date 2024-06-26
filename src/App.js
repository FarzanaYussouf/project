
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


import FlipCard from './Pages/Home';
import Home from './Pages/Home';
import AOS from "aos";
import"aos/dist/aos.css"
import About from './Pages/About';



function App() {
  useEffect(()=>{
    AOS.init();
  },[]
  
  )
  return (
   <>

   
  <Navbar/>
   {/* <Footer/> */}
   {/* <Home/> */}
   {/* <FlipCard/> */}
{/* <About/> */}

   </>
  );
}

export default App;
