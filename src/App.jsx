import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testomonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div> 
  );
}

export default App;
