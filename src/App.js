import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'; // Import the button component
import ImageGallery from './components/ImageGallery.';
import AgeCategories from './components/AgeCategories';
import Testimonials from './components/Testimonials';
import ReviewsSlider from './components/ReviewsSlider';
import TopCategories from './components/TopCategories';
import PuzzlesSlider from './components/Data/PuzzlesSlider';
import ToysSlider from './components/Data/ToysSlider';
import GamesSlider from './components/Data/GamesSlider';
import HeroMain from './components/Hero/HeroMain';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero />
      <HeroMain/>
      <AgeCategories/>
      <PuzzlesSlider/>
      <TopCategories/>
      <ToysSlider/>
      <GamesSlider/>
      <ReviewsSlider/>
      <Testimonials/>
      <ImageGallery/>  
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
