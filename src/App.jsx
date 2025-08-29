import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AcRoyalSuite from './Pages/Houseboats/AC_Royal_Suite';
import SuperDeluxe from './Pages/Houseboats/Super_Deluxe';
import PremiumLake from './Pages/Houseboats/Premium_Lake_View';
import NageenSuite from './Pages/Houseboats/Nageen_Suite_Room';
import Gulmarg from './Pages/Tours/Gulmarg'
import Pahalgam from './Pages/Tours/Pahalgam'
import Sonmarg from './Pages/Tours/Sonmarg'
import Attraction from './Pages/Travel Guide/Attraction'
import Culture from './Pages/Travel Guide/Culture'
import LocalCuisine from './Pages/Travel Guide/Local_Cuisine'
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,        // animation duration (ms)
      offset: 100,           // offset (px) from the trigger point
      easing: "ease-in-out", // easing
      once: false,           // 👈 allow repeat on scroll
      mirror: true,          // 👈 animate out while scrolling back up
    });
    AOS.refresh(); // 👈 helps when route/page changes
  }, []);
  return (
    <>
      <Navbar />
      {/* <Route path="/" element={<Navbar />} /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Houseboats */}
        <Route path="/ac-royal-suite" element={<AcRoyalSuite />} />
        <Route path="/super-deluxe" element={<SuperDeluxe />} />
        <Route path="/premium-lake" element={<PremiumLake />} />
        <Route path="/nageen-suite" element={<NageenSuite />} />

        {/* Tours */}
        <Route path="/gulmarg" element={<Gulmarg />} />
        <Route path="/pahalgam" element={<Pahalgam />} />
        <Route path="/sonmarg" element={<Sonmarg />} />

        {/* Travel Guide */}
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/local-cuisine" element={<LocalCuisine />} />

        <Route path="/blog" element={<Blog />} />
        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App