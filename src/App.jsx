import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';

// Lazy load components for code splitting
const AcRoyalSuite = lazy(() => import('./Pages/Houseboats/AC_Royal_Suite'));
const SuperDeluxe = lazy(() => import('./Pages/Houseboats/Super_Deluxe'));
const PremiumLake = lazy(() => import('./Pages/Houseboats/Premium_Lake_View'));
const NageenSuite = lazy(() => import('./Pages/Houseboats/Nageen_Suite_Room'));
const Gulmarg = lazy(() => import('./Pages/Tours/Gulmarg'));
const Pahalgam = lazy(() => import('./Pages/Tours/Pahalgam'));
const Sonmarg = lazy(() => import('./Pages/Tours/Sonmarg'));
const Attraction = lazy(() => import('./Pages/Travel Guide/Attraction'));
const Culture = lazy(() => import('./Pages/Travel Guide/Culture'));
const LocalCuisine = lazy(() => import('./Pages/Travel Guide/Local_Cuisine'));
const Blog = lazy(() => import('./Pages/Blog'));
const Contact = lazy(() => import('./Pages/Contact'));


function App() {
  return (
    <>
      <Navbar />
      {/* <Route path="/" element={<Navbar />} /> */}

      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#f5c934]"></div>
        </div>
      }>
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
      </Suspense>
      <Footer />
    </>
  )
}

export default App