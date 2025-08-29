// import React from 'react'

// const Blog = () => {
//     return (
//         <div className='px-10 py-10'>
//             <div className=" relative w-80 h-60 overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
//                 {/* Background Image */}
//                 <img
//                     src="HouseBoats/SuperDeluxe.jpg"
//                     alt="Houseboat"
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
//                 />

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>

//                 {/* Text + Button */}
//                 <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end p-4 
//                       transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
//                       transition-all duration-700 ease-in-out">
//                     <h2 className="text-white text-xl font-bold drop-shadow-md">
//                         Jewel of Kashmir
//                     </h2>
//                     <p className="text-gray-200 text-sm mt-1">Luxury Houseboat Stay</p>
//                     <button className="mt-3 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition">
//                         Book Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Blog

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "Experience the Magic of Nigeen Lake",
            excerpt:
                "Why Nigeen Lake is called the ‘Jewel in the Ring of Kashmir’ and how to make the most of your stay here.",
            image:
                "https://images.unsplash.com/photo-1607779097990-44d39b98d24c?q=80&w=1200",
            category: "Destinations",
            link: "/blog/nigeen-lake",
        },
        {
            id: 2,
            title: "Top 5 Things to Do in a Houseboat Stay",
            excerpt:
                "From sipping Kahwa at sunrise to stargazing at night, here’s how to create memories on a houseboat.",
            image:
                "https://images.unsplash.com/photo-1622455021675-3e447ddb5a0d?q=80&w=1200",
            category: "Experiences",
            link: "/blog/houseboat-stay",
        },
        {
            id: 3,
            title: "Kashmiri Cuisine: A Food Lover’s Guide",
            excerpt:
                "Explore Rogan Josh, Gushtaba, and the world-famous Wazwan – a feast for the senses.",
            image:
                "https://images.unsplash.com/photo-1621784563330-5ec64c21bcd9?q=80&w=1200",
            category: "Food & Culture",
            link: "/blog/kashmiri-food",
        },
        {
            id: 4,
            title: "A Journey Through Gulmarg",
            excerpt: "Discover why Gulmarg is a year-round paradise for skiers and trekkers alike.",
            image:
                "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200",
            category: "Destinations",
            link: "/blog/gulmarg",
        },
        {
            id: 5,
            title: "Hidden Gems of Srinagar",
            excerpt: "Uncover offbeat experiences and lesser-known attractions in Srinagar.",
            image:
                "https://images.unsplash.com/photo-1617196036879-5ff98f3bc3a7?q=80&w=1200",
            category: "Travel Tips",
            link: "/blog/srinagar-gems",
        },
        {
            id: 6,
            title: "The Enchanting Gardens of Kashmir",
            excerpt:
                "Walk through Shalimar, Nishat, and Chashme Shahi — Mughal-era gardens that tell timeless stories.",
            image:
                "https://images.unsplash.com/photo-1596445667470-4b9c35f6f2f8?q=80&w=1200",
            category: "Culture",
            link: "/blog/kashmir-gardens",
        },
    ];

    const swiperRef = useRef(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1582738412215-56c1ef9c1e59?q=80&w=1600')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Kashmir Travel Journal
                    </motion.h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                        Stories, guides, and hidden gems from the paradise on earth 🌿
                    </p>
                </div>
            </section>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-10">
                {/* Left Content */}
                <div className="lg:col-span-3">
                    {/* Featured Post */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg mb-12"
                    >
                        <img
                            src={posts[0].image}
                            alt={posts[0].title}
                            className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white max-w-lg">
                            <span className="bg-emerald-600 text-sm px-3 py-1 rounded-full">
                                {posts[0].category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold mt-3">
                                {posts[0].title}
                            </h2>
                            <p className="text-gray-200 mt-2">{posts[0].excerpt}</p>
                            <Link
                                to={posts[0].link}
                                className="inline-flex items-center mt-3 text-amber-400 font-semibold hover:underline"
                            >
                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Blog Slider */}
                    <div>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            grabCursor={true}
                            autoplay={{ delay: 3, disableOnInteraction: false }}
                            speed={10000}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                                1280: { slidesPerView: 2 },
                            }}
                        >
                            {posts.slice(1).map((post) => (
                                <SwiperSlide key={post.id}>
                                    <motion.div
                                        key={post.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                                    >
                                        <div className="h-52 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full self-start">
                                                {post.category}
                                            </span>
                                            <h3 className="text-lg font-bold mt-2 text-gray-800 hover:text-emerald-700 transition">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mt-2 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                to={post.link}
                                                className="mt-3 text-emerald-700 font-semibold hover:underline flex items-center"
                                            >
                                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="flex justify-center mt-12 gap-3">
                            <button
                                onClick={() => swiperRef.current?.slideTo(0)}
                                className="px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50"
                            >
                                1
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideTo(1)}
                                className="px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50"
                            >
                                2
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext(s)}
                                className="px-4 py-2 bg-white shadow rounded-lg hover:bg-emerald-50"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Categories */}
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h4 className="font-bold text-gray-800 mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Food & Culture
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-emerald-700">
                                    Travel Tips
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h4 className="font-bold text-gray-800 mb-4">Recent Posts</h4>
                        <ul className="space-y-3">
                            {posts.map((p) => (
                                <li key={p.id}>
                                    <Link
                                        to={p.link}
                                        className="text-sm text-gray-700 hover:text-emerald-700"
                                    >
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-emerald-600 p-6 rounded-2xl shadow-md text-white">
                        <h4 className="font-bold mb-2">Stay Inspired 🌸</h4>
                        <p className="text-sm mb-3">
                            Get travel tips, guides, and special offers delivered to your
                            inbox.
                        </p>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-lg text-gray-800"
                        />
                        <button className="mt-3 w-full bg-amber-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-amber-300">
                            Subscribe
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
