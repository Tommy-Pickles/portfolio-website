import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import WSPGallery from './components/pages/WSPGallery';
import Wonderland from './components/pages/Wonderland';
import Beanstalk from './components/pages/Beanstalk';


function App() {

  const galleryImagesB = [
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },

  ]

  const galleryImagesW = [
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },

  ]

  const galleryImages = [
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },
    {
      img: "/images/doge-biden-mintspixel.jpg"
    },
    {
      img: "/images/Meme_DOGE go brrr.jpg"
    },
    {
      img: "/images/doge-pepe-farmer-pixels.jpg"
    },
    {
      img: "/images/doge-unbothered-text.jpg"
    },
    {
      img: "/images/man_holding_DOGE_sign.jpg"
    },
    {
      img: "/images/Doge_drake.jpg"
    },
    {
      img: "/images/doe-pokemon-memes-3.jpg"
    },

  ]


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path= "/services" element={<Services />} />
        <Route path= "/AboutMe" element={<AboutMe />} />
        <Route path= "/products" element={<Products />} />
        <Route path= "/sign-up" element={<SignUp />} />
        <Route path= "/Footer" element={<Footer />} />
        <Route path= "/WSPGallery" element={<WSPGallery galleryImages={galleryImages}/>} />
        <Route path= "/Wonderland" element={<Wonderland galleryImagesW={galleryImagesW}/>} />
        <Route path= "/Beanstalk" element={<Beanstalk galleryImagesB={galleryImagesB}/>} />
        </Routes>
        
        <Footer />
      </Router>
      

    </>
  );
}

export default App;
