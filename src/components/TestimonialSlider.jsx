import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialSlider = ({ TestimonialData }) => {


    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000} // smoother transition speed
            breakpoints={{
                320: { slidesPerView: 1 },   // Mobile
                640: { slidesPerView: 1 },   // Small tablets
                768: { slidesPerView: 2 },   // Tablets
                1024: { slidesPerView: 3 },  // Laptops
                1280: { slidesPerView: 4 },  // Large screens
            }}
        >
            {TestimonialData.map((guest) => (
                <SwiperSlide key={guest.id}>
                    <div className="p-5 rounded-2xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-md border border-gray-200 hover:shadow-2xl transition-all duration-500">
                        {/* Image */}
                        <div className="relative h-64">
                            <img
                                src={guest.image}
                                alt={guest.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg sm:text-xl font-semibold">{guest.name}</h3>
                                <p className="text-sm text-gray-200">{guest.location}</p>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="p-6 text-center">
                            <p className="text-gray-700 italic leading-relaxed">
                                "{guest.message}"
                            </p>
                            <div className="flex justify-center mt-3 text-yellow-500 text-lg">
                                {"⭐".repeat(guest.rating)}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSlider;
