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
import Test from './components/pages/Test';
import biden from './img/doge-biden-mintspixel.jpg';
import dogBrrr from './img/Meme-DOGE-go brrr.jpg';
import farmer from './img/doge-pepe-farmer-pixels.jpg';
import unbothered from './img/doge-unbothered-text.jpg';
import signGuy from './img/man_holding_DOGE_sign.jpg';
import dogeDrake from './img/Doge_drake.jpg';
import memePokemon from './img/doe-pokemon-memes-3.jpg';
import arms from './img/doge-4arms-2.png';
import cate from './img/cate.jpg';
import bomb from './img/doge-comfy-bomb.png';
import meditate from './img/doge-gm-meditate.png';
import obama from './img/doge-obama-medal.png';
import dogeBlur from './img/doge-blurredmona.png';
import dogeMaps from './img/doge-googlemaps.png';
import dogeLady from './img/doge-milady.png';
import dogeSBF from './img/doge-SBF.png';
import dogeSad from './img/doge-sad.png';
import dogeRead from './img/doge-howto.png';
import dogeZoomer from './img/doge-thenvsnow.png';
import dogeLaptop from './img/doge-mag_pixel-plaindoge.png';
import dogeSmoke from './img/Doge_bongsmoke.png';
import dogePortal from './img/doge-pixelportal-pepe-drink.png';
import dogeCope from './img/Doge_cope.png';
import wonderDrake from './img/wonder-drake.jpeg';
import wonderAlways from './img/always_has_been_TIME.png';
import wonderTrain from './img/train_shitcoin_OHM.png';
import wonderDontKnow from './img/they_dont_know24_11.JPG';
import wonderSnow from './img/snowban_rug_fin.png';
import wonderBrrr from './img/printer_brr_time.png';
import wonderCave from './img/wonder-cave.png';
import Cards from './components/Cards';
import Tweets from './components/pages/Tweets';
// import wonderJoe from './img/Frogs_V_Joe_FIN2.jpg';
import {Helmet} from "react-helmet";



function App() {

  const galleryImages = [
    {
      img: biden
    },
    {
      img: dogBrrr
    },
    {
      img: farmer
    },
    {
      img: unbothered
    },
    {
      img: signGuy
    },
    {
      img: dogeDrake
    },
    {
      img: memePokemon
    },
    {
      img: arms
    },
    {
      img: cate
    },
    {
      img: bomb
    },
    {
      img: meditate
    },
    {
      img: obama
    },
    {
      img: dogeBlur
    },
    {
      img: dogeMaps
    },
    {
      img: dogeLady
    },
        {
      img: dogeSad
    },
    {
      img: dogeSBF
    },
        {
      img: dogeRead
    },
    {
      img: dogeZoomer
    },
        {
      img: dogeLaptop
    },
    {
      img: dogeSmoke
    },
        {
      img: dogePortal
    },

    {
      dogeCope
    }
    
    ]

  
  const galleryImagesB = [
    {
      img: require('./img/They_dont_know_bean.jpg')
    },
    {
      img: require('./img/bean_castle.jpg')
    },
    {
      img: require('./img/farm_bean_1.jpg')
    },
    {
      img: require('./img/Bean_bell_3.jpg')
    },
    {
      img: require('./img/Bean_bell.png')
    },
    {
      img: "/images/Doge_drake.jpg"
    },
  

  ]

  const galleryImagesW = [
    {
      img: wonderDrake
    },
    {
      img: wonderAlways
    },
    {
      img: wonderTrain
    },
    {
      img: wonderDontKnow
    },
    {
      img: wonderSnow
    },
    {
      img: wonderBrrr
    },
    {
      img: wonderCave
    },
    {
      img: require('./img/Frogs_V_Joe_FIN2.jpg')
    },


  ]

 


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"Cards"} element={<Cards />} />
        <Route path= "/services" element={<Services />} />
        <Route path= "/AboutMe" element={<AboutMe />} />
        <Route path= "/products" element={<Products />} />
        <Route path= "/sign-up" element={<SignUp />} />
        <Route path= "/Test" element={<Test />} />
        <Route path= "/Footer" element={<Footer />} />
        <Route path= "/Tweets" element={<Tweets />} />
        <Route path= "/WSPGallery" element={<WSPGallery galleryImages={galleryImages}/>} />
        <Route path= "/Wonderland" element={<Wonderland galleryImagesW={galleryImagesW}/>} />
        <Route path= "/Beanstalk" element={<Beanstalk galleryImagesB={galleryImagesB}/>} />
        </Routes>
        
        <Footer />
      </Router>
      <Helmet>
                <meta charSet="utf-8" />
                <title>COCK</title>
                <link rel="canonical" href="https://Tommy-Pickles.github.io/portfolio-website" />
                <meta name="description" content="PUSSY PUSSY PUSSY HOLE" />
        </Helmet>

    </>
  );
}

export default App;
