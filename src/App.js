import './App.css';
import Ads from './Components/Ads';
import Copy from './Components/Copy';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Models from './Components/Models';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
        <Ads/>
        <Navbar/>
        <Hero/>
        <Models/>
        <Footer/>
        <Copy/>
    </div>
  );
}

export default App;
