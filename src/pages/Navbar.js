"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="text-sl bg-green-500/80">

            <div className="hidden md:flex items-center justify-between px-4 mx-auto max-w-[1200px]">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="rounded-full h-10 w-10" />
                    <p className="text-white font-bold text-2xl mx-4">Restaurant</p>
                </div>
                <ul className="flex flex-row p-4 space-x-8">

                    <li>
                        <Link to="/" className="group">
                            <h1 className="hover:text-green-900 text-white text-xl font-bold">Home</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"></div>
                                <div className="absolute w-2/3 mt-1 h-1 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"></div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="group">
                            <h1 className="hover:text-green-900 text-xl text-white font-bold">Dashboard</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"></div>
                                <div className="absolute w-2/3 mt-1 h-1 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full"></div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div
                className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50"
                onClick={toggleNav}
                aria-label={nav ? "Close menu" : "Open menu"}
            >
                {nav ? (
                    <AiOutlineClose size={30} className="text-gray-400" />
                ) : (
                    <AiOutlineMenu size={30} className="text-gray-400" />
                )}
            </div>


            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                    <li>
                        <Link to="/" className="group text-white/70 hover:text-gray-400" onClick={closeNav}>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="group text-white/70 hover:text-gray-400" onClick={closeNav}>
                            <h1>Dashboard</h1>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
