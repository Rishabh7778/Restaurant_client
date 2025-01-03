import React from 'react';
import home from '../assets/home.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useTitle } from './UseTitle';


const Home = () => {
    // title
    useTitle("Home");
    return (
        <div>
           <Navbar/> 
            <div className="h-screen w-full overflow-hidden flex items-center justify-center relative">
                <img
                    src={home}
                    alt="Home-image"
                    className="h-full w-full absolute inset-0"
                />
                <div className="text-center z-10">
                    <p className="text-white text-6xl font-bold mb-6">
                    Restaurant Booking Table
                    </p>

                    <Link to="/booking">
                        <button
                            className="bg-emerald-600 px-10 py-4 rounded-lg text-2xl font-bold text-gray-100 tracking-wide hover:shadow-lg transform transition duration-200 hover:scale-90 hover:translate-x-2 hover:translate-y-2 hover:bg-slate-50 hover:text-black"
                        >
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
