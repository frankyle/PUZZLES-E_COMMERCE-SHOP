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
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero id="home" />
      <AgeCategories/>
      <ProductSlider/>
      <TopCategories/>
      <ReviewsSlider/>
      <Testimonials/>
      <ImageGallery/>  
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
