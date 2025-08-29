import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuRef = useRef(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    // Close dropdowns & menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-black  shadow-md z-50">
            <div
                ref={menuRef}
                className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20"
            >
                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Left Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-text font-medium">
                    <NavLink to="/" className=" text-amber-400 hover:text-white transition">Home</NavLink>

                    <div className="relative ">
                        <button
                            onClick={() => toggleDropdown("houseboats")}
                            className="flex items-center gap-1 text-amber-400 hover:text-white transition"
                        >
                            Houseboats <ChevronDown size={16} />
                        </button>
                        {activeDropdown === "houseboats" && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-44 z-30">
                                <NavLink to="/super-deluxe" className="block px-4 py-2 hover:bg-gray-100">Super Deluxe</NavLink>
                                <NavLink to="/ac-royal-suite" className="block px-4 py-2 hover:bg-gray-100">AC Royal Suite</NavLink>
                                <NavLink to="/nageen-suite" className="block px-4 py-2 hover:bg-gray-100">Nageen Suite Room</NavLink>
                                <NavLink to="/premium-lake" className="block px-4 py-2 hover:bg-gray-100">Premium Lake View Room</NavLink>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("tours")}
                            className="flex items-center gap-1 text-amber-400 hover:text-white transition"
                        >
                            Tours <ChevronDown size={16} />
                        </button>
                        {activeDropdown === "tours" && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-44 z-30">
                                <NavLink to="/gulmarg" className="block px-4 py-2 hover:bg-gray-100">Gulmarg</NavLink>
                                <NavLink to="/pahalgam" className="block px-4 py-2 hover:bg-gray-100">Pahalgam</NavLink>
                                <NavLink to="/sonmarg" className="block px-4 py-2 hover:bg-gray-100">Sonmarg</NavLink>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Center Brand */}
                <div className="flex items-center">
                    <img
                        src="/Logo/Logo.jpg"
                        alt="Jewel of Kashmir"
                        className="h-12 w-auto md:h-14 lg:h-16 object-contain"
                    />
                </div>

                {/* Right Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("guide")}
                            className="flex items-center gap-1  text-amber-400 hover:text-white transition"
                        >
                            Travel Guide <ChevronDown size={16} />
                        </button>
                        {activeDropdown === "guide" && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 z-30">
                                <NavLink to="/attraction" className="block px-4 py-2 hover:bg-gray-100">Attractions</NavLink>
                                <NavLink to="/local-cuisine" className="block px-4 py-2 hover:bg-gray-100">Local Cuisine</NavLink>
                                <NavLink to="/culture" className="block px-4 py-2 hover:bg-gray-100">Culture</NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/blog" className=" text-amber-400 hover:text-white transition">Blog</NavLink>
                    <NavLink to="/contact" className=" text-amber-400 hover:text-white transition">Contact</NavLink>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md py-4 space-y-3 text-gray-700 font-medium px-6">
                    <NavLink to="/" className="block hover:text-rose-600">Home</NavLink>
                    <NavLink to="/houseboats" className="block hover:text-rose-600">Houseboats</NavLink>
                    <NavLink to="/tours" className="block hover:text-rose-600">Tours</NavLink>
                    <NavLink to="/guide" className="block hover:text-rose-600">Travel Guide</NavLink>
                    <NavLink to="/blog" className="block hover:text-rose-600">Blog</NavLink>
                    <NavLink to="/contact" className="block hover:text-rose-600">Contact</NavLink>
                </div>
            )}
        </header>
    );
}
