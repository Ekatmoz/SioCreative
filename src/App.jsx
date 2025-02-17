import './App.css';
import Navigation from './Components/Navigation';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Testimonials from './Components/Testomonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Technologies from './Components/Technologies';
import New from './Components/Portfolio';
import Hero from './Components/Hero';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navigation />
      <Hero />
      <AboutUs />
      <Technologies />
      <Services />
      <New />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
