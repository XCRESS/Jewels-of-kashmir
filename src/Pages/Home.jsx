import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import TestimonialData from "../Data/Testimonial.json"
import TestimonialSlider from '../components/TestimonialSlider'

const Home = () => {
    return (
        <div className=''>
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-64px)] overflow-hidden flex justify-center items-center text-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                >
                    <source src="/Home_Vedio.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

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
                            to="/booking"
                            className="px-6 py-3 rounded-2xl bg-[#f5c934] text-gray-900 font-semibold hover:bg-yellow-400 transition"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/explore"
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
                        data-aos="fade-up"
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
                            ].map((boat, idx) => (
                                <div className=" max-w-sm  mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
                                    {/* Image Container */}
                                    <div className="relative group">
                                        <img
                                            src={boat.img}
                                            alt="Super Deluxe"
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
                                            dsblf sf a asfhol sf shfhs fhisfh askfh sl.aifhksehf ifheskh
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
                                    key={idx}
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
                    <TestimonialSlider TestimonialData={TestimonialData} />
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