
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ThemeContext  from './Components/ThemeContext';
import ThemeSwitcher from './Components/ThemeSwitcher';
import FlipCard from './Pages/Home';
import Home from './Pages/Home';
function App() {
  return (
   <>
   
   <ThemeContext/>
   <Navbar/>
   <Footer/>
   {/* <Home/> */}
   <FlipCard/>

   </>
  );
}

export default App;
