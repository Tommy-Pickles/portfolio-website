import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import WSPGallery from './WSPGallery';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <WSPGallery />





    </>
  );
}

export default Home;