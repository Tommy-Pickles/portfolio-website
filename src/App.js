import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import WSPGallery from './components/pages/WSPGallery';






function App() {

  const galleryImages = [
    {
      img: "/images/img-9-1.jpg"
    },
    { 
      img: "/images/img-9.jpg"
    }
  ]
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/services" element={<Services />} />
        <Route path= "/AboutMe" element={<AboutMe />} />
        <Route path= "/products" element={<Products />} />
        <Route path= "/sign-up" element={<SignUp />} />
        <Route path= "/Footer" element={<Footer />} />
        <Route path= "/WSPGallery" element={<WSPGallery />} />
        {/* <Route path= "/WSPGallery" WSPGallery galleryImages={galleryImages} element={<WSPGallery/>}/> */}
        </Routes>
        {/* <WSPGallery
        galleryImages={galleryImages}
      /> */}
        <Footer />
      </Router>


    </>
  );
}

export default App;
