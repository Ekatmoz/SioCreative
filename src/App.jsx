import './App.css';
import Navigation from './Components/Navigation';
// // import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testomonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Test from './Components/Hero';
import Technologies from './Components/Technologies';
import New from './Components/New';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navigation />
      <Test />
      {/* <Hero/> */}
      <AboutUs />
      <Technologies />
      <New />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
