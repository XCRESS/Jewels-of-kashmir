import React, { memo, lazy, useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import TestimonialData from "../Data/Testimonial.json"

// Lazy load testimonial slider for better initial load
const TestimonialSlider = lazy(() => import('../components/TestimonialSlider'))

const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        // Start loading video after critical content is rendered
        const timer = setTimeout(() => {
            setShowVideo(true)
        }, 1000) // Delay video load by 1 second
        
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className=''>
            <section 
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-64px)] overflow-hidden flex justify-center items-center text-center"
                style={{
                    backgroundImage: !showVideo ? 'url(/hero_image.webp)' : 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Progressive video loading */}
                {showVideo && (
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        onLoadedData={() => setVideoLoaded(true)}
                        style={{
                            opacity: videoLoaded ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                        onError={(e) => {
                            console.log('Video failed to load, keeping fallback image');
                            setShowVideo(false);
                        }}
                    >
                        <source src="/Home_Vedio.webm" type="video/webm" />
                    </video>
                )}
                
                <div className="absolute inset-0 bg-black/30"></div>

                <motion.div
                    className="relative z-10 max-w-2xl px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[#f5c934] drop-shadow-lg mb-10">
                        Feel the <span className='text-black'>Harmony</span>
                    </h1>

                    <div className="mt-14 flex justify-center gap-4 ">
                        <Link
                            to="/contact"
                            className="px-6 py-3 rounded-2xl bg-[#f5c934] text-gray-900 font-semibold hover:bg-yellow-400 transition"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/super-deluxe"
                            className="px-6 py-3 rounded-2xl bg-white/80 text-gray-900 font-semibold hover:bg-white transition"
                        >
                            Explore
                        </Link>
                    </div>
                </motion.div>
            </section>
            <div className="bg-[#fdfcf7] text-gray-900 overflow-hidden">

                {/* 🏡 A   bout Section */}
                <section className="py-8 px-6 md:px-12 bg-white">
                    <div
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
                            Welcome to <span className='text-amber-500'> Kashmir Houseboat</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            The Jewels of Kashmir offer luxury houseboats in the serene waters
                            of Nigeen Lake. Blending Kashmiri tradition with modern comfort, we
                            provide an unforgettable experience surrounded by breathtaking
                            beauty.
                        </p>
                    </div>
                </section>

                {/* ✨ Featured Houseboats */}
                <section className="py-8 bg-[#fdfcf7]">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-[#0a2540]">
                            Our Houseboats
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                            {[
                                { name: "Super Deluxe", img: "HouseBoats/SuperDeluxe.jpg", path: "/super-deluxe" },
                                { name: "Royal Suite", img: "HouseBoats/RoyalSuite.jpg", path: "/ac-royal-suite" },
                                { name: "Premium Lake View", img: "HouseBoats/PremiumLake.jpg", path: "/premium-lake" },
                                { name: "Nigeen Suite", img: "HouseBoats/NageenLake.jpg", path: "/nageen-lake" },
                            ].map((boat) => (
                                <div key={boat.name} className=" max-w-sm  mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
                                    {/* Image Container */}
                                    <div className="relative group">
                                        <img
                                            src={boat.img}
                                            alt={`${boat.name} Houseboat - Luxury accommodation on Nigeen Lake`}
                                            loading="lazy"
                                            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <p className="text-white text-lg font-semibold">Luxury Awaits</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 text-center">
                                        <h3 className="text-xl font-bold text-gray-800">{boat.name}</h3>
                                        <p className="text-gray-600">
                                            Experience luxury and comfort in our premium houseboat with stunning lake views.
                                        </p>

                                        {/* Button */}
                                        <Link
                                            to={boat.path}
                                            className="inline-block cursor-pointer mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 🌟 Why Choose Us */}
                <section className="py-16 bg-[#0a2540] text-white">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                            {[
                                { icon: "🛶", text: "Traditional Kashmiri Experience" },
                                { icon: "⭐", text: "Luxury Comfort & Service" },
                                { icon: "🌅", text: "Stunning Lake Views" },
                                { icon: "🍽", text: "Authentic Kashmiri Cuisine" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={`feature-${idx}`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition"
                                >
                                    <div className="text-4xl">{item.icon}</div>
                                    <p className="mt-3">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 📝 Testimonials */}
                <div className='py-10 px-15'>
                    <React.Suspense fallback={
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#f5c934]"></div>
                        </div>
                    }>
                        <TestimonialSlider TestimonialData={TestimonialData} />
                    </React.Suspense>
                </div>
                {/* 📞 Call to Action */}
                <section className="relative py-20 bg-[#0a2540] text-center text-white">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Ready to Experience the Jewels of Kashmir?
                    </motion.h2>
                    <Link
                        to="/contact"
                        className="inline-block mt-8 px-8 py-4 bg-[#f5c934] text-gray-900 font-semibold rounded-2xl hover:bg-yellow-400 transition"
                    >
                        Contact Us
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Home;