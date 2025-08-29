import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Utensils, Monitor, Wifi, Eye, Sun, Trees, Briefcase, BedDouble, Bath, MapPin, Phone, Mail, MessageCircle } from "lucide-react";



const SuperDeluxe = () => {
    const images = [
        "HouseBoats/Premium_Lake_View/1.jpeg",
        "HouseBoats/Premium_Lake_View/2.jpeg",
        "HouseBoats/Premium_Lake_View/3.jpeg",
        "HouseBoats/Premium_Lake_View/4.jpeg",
        "HouseBoats/Premium_Lake_View/5.jpeg",
        "HouseBoats/Premium_Lake_View/6.jpeg",
        "HouseBoats/Premium_Lake_View/7.jpeg",
        "HouseBoats/Premium_Lake_View/8.jpeg",

    ];

    const features = [
        { icon: <Utensils className="w-6 h-6" />, label: "Multi Cuisine" },
        { icon: <Monitor className="w-6 h-6" />, label: "TV & Media Access" },
        { icon: <Wifi className="w-6 h-6" />, label: "Free Wi-Fi" },
        { icon: <Eye className="w-6 h-6" />, label: "Lake View" },
        { icon: <Sun className="w-6 h-6" />, label: "Air Conditioning" },
        { icon: <Trees className="w-6 h-6" />, label: "Garden" },
        { icon: <Briefcase className="w-6 h-6" />, label: "Luggage Storage" },
        { icon: <BedDouble className="w-6 h-6" />, label: "Double Bed" },
        { icon: <Bath className="w-6 h-6" />, label: "Jacuzzi" },

    ];


    const infoItems = [
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Address",
            value: "Boulevard Rd Shikara Ghat,\nDurgjan, Srinagar 190001",
            link: "https://maps.google.com/?q=Boulevard+Rd+Shikara+Ghat,Srinagar",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+91 99 06 00 11 22",
            link: "tel:+919906001122",
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: "E-mail",
            value: "info@kashmirhouseboat.com",
            link: "mailto:info@kashmirhouseboat.com",
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: "WhatsApp",
            value: "Says! Hello Kashmir Houseboat",
            link: "https://wa.me/919906001122?text=Hello%20Kashmir%20Houseboat",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Premium Lake View
                </h1>
                <div className="mt-4 flex flex-col items-center justify-center gap-1">
                    <span className="w-1/3 h-[2px] bg-blue-500"></span>
                    <span className="w-1/2 h-[2px] bg-yellow-500"></span>
                    <span className="w-1/4 h-[2px] bg-red-500"></span>
                </div>
            </div>

            {/* Image Slider */}
            <div className="flex flex-col lg:flex-row w-full min-h-screen gap-10">
                {/* LEFT: Swiper Slider */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-2xl">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop
                            autoplay={{ delay: 3000 }}
                            navigation
                            pagination={{ clickable: true }}
                            className="rounded-2xl shadow-lg"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={src}
                                        alt={`Super Deluxe ${index + 1}`}
                                        className="w-full h-[650px] object-cover rounded-2xl"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* RIGHT: Details Section */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-700 tracking-widest mb-6 text-center uppercase">
                        Room Features
                    </h2>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-white hover:from-yellow-100 hover:shadow-lg transition"
                            >
                                <div className="text-yellow-600">{item.icon}</div>
                                <p className="text-gray-800 font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Overview */}
            <section className="my-8 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                    The Premium Lake View Room is all about elegance and serenity.
                    <strong> With its luxuriant interiors, refined décor, and a comfortable double bed , </strong>
                    it creates the perfect retreat for couples. The highlight, of course,
                    is the breathtaking view of Nigeen Lake right from your window—turning
                    every sunrise and sunset into a picture-perfect memory.
                </p>
            </section>

            <div className="flex flex-col lg:flex-row w-full min-h-screen gap-10 p-4">
                {/* Left Side */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    {/* Features */}
                    <section className="mb-8 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <h2 className="text-2xl font-semibold mb-4">Features & Amenities</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                            <li>Spacious rooms with king-size beds</li>
                            <li>Attached bathrooms with hot & cold water</li>
                            <li>Traditional Kashmiri hand-carved wooden interiors</li>
                            <li>Complimentary Wi-Fi and 24/7 room service</li>
                            <li>Sun deck with panoramic views of Nigeen Lake</li>
                            <li>Dining area serving authentic Kashmiri & Indian cuisine</li>
                        </ul>
                    </section>

                    {/* Policies */}
                    <section className="mb-8 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                        <h2 className="text-2xl font-semibold mb-4">Houseboat Policies</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                            <li>Check-in: 12:00 PM | Check-out: 11:00 AM</li>
                            <li>Pets are not allowed</li>
                            <li>Complimentary stay for children below 5 years</li>
                            <li>Extra bed available on request (additional charges)</li>
                            <li>Cancellation policy: Free cancellation up to 48 hours</li>
                        </ul>
                    </section>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-lg bg-gradient-to-br from-white via-gray-50 to-yellow-50 rounded-3xl shadow-xl p-8 border border-gray-200">
                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-800 tracking-[0.2em] mb-6 uppercase relative">
                            Information
                            <span className="absolute left-0 -bottom-1 w-46 h-[2px] bg-yellow-500 rounded-full"></span>
                        </h2>

                        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                            A fourth-generation hospitality initiative – Since 1932.
                        </p>

                        {/* Info Items */}
                        <div className="space-y-6">
                            {infoItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-4 group transition-transform hover:translate-x-1"
                                >
                                    <div className="text-yellow-600 bg-yellow-100 group-hover:bg-yellow-500 group-hover:text-white p-3 rounded-xl shadow-sm transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                            {item.label}
                                        </p>
                                        <p className="text-gray-600 text-base whitespace-pre-line group-hover:text-gray-800">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* CTA */}
            <div className="text-center mt-10">
                <a
                    href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20want%20to%20book%20the%20Super%20Deluxe%20Houseboat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-xl shadow-lg transition"
                >
                    Book Now
                </a>
            </div>

        </div>
    );
};

export default SuperDeluxe;
