import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import People from "./pages/People";
import Kids from "./pages/Kids";
import Interior from "./pages/Interior";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
function AppContent() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [background, setBackground] = useState('default');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/people' || location.pathname === '/kids' || location.pathname === '/interior' || location.pathname === '/about' || location.pathname === '/contact') {
      setBackground('color');
    } else {
      setBackground('default');
    }
  }, [location]);

  return (
    <div className={`app ${background}`}>
      
      <Navigation setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path='/' element={<Home isMenuOpen={isMenuOpen} />} />
        <Route path='/people' element={<People />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/interior' element={<Interior />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer isMenuOpen={isMenuOpen} />

    </div>
  )
}

export default App
