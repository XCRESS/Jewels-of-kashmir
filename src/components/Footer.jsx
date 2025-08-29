import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-gray-300 pt-12">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About */}
                <div>
                    <h2 className="text-xl font-bold text-yellow-400">Jewel of Kashmir</h2>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        Experience the charm of heritage houseboats on Nigeen Lake,
                        Srinagar — blending tradition, comfort, and Kashmiri hospitality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Houseboats</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Gallery</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            Srinagar, Jammu & Kashmir, India
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-yellow-400" />
                            +91 98765 43210
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" />
                            info@jewelofkashmir.com
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="text-blue-600 hover:text-white"><FaFacebook /></a>
                        <a href="#" className="text-pink-500 hover:text-white"><FaInstagram /></a>
                        <a href="#" className="text-sky-400 hover:text-white"><FaTwitter /></a>
                        <a href="#" className="text-red-600 hover:text-white"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Jewel of Kashmir. All rights reserved.
            </div>
        </footer>
    );
}
