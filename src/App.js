import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/MyWork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'



// Navbar Components Import 
// import About from "./navbarcomponents/About";
// import Portfolio from './navbarcomponents/Portfolio';
// import Services from './navbarcomponents/Services';
// import Blog from './navbarcomponents/Blog';
function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
   
  {/* <BrowserRouter>
    <Routes>
      <Route path='/About' element={<About/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Services' element = {<Services/>}/>
      <Route path='/Blog' element={<Blog/>}/>
    </Routes>
  </BrowserRouter> */}
  
  </>
  );
}

export default App;
