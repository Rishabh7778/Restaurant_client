import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Succesfully from "./Succesfully";
import shef from '../assets/shef.png';
import Navbar from './Navbar'
import { useTitle } from "./UseTitle";

const Booking = () => {
  useTitle("Table-Book")


  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, time, guests, name, contact } = formData;
    if (!date || !time || !guests || !name || !contact) {
      toast.error("Please fill in required fields!", toastOption);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/bookings", formData);
      setFormData({ date: "", time: "", guests: "", name: "", contact: "" });
      toast.success(response.data.message || "Booking successful!", toastOption);

      setIsSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      console.error("Error creating booking:", err.message);
      toast.error(err.response?.data?.message || "Error creating booking.", toastOption);
    }
  };

  if (isSuccess) {
    return <Succesfully />;
  }

  return (
    <div className="h-screen">
      <ToastContainer />
      <Navbar />
      <div className="max-w-5xl mx-auto my-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row p-4">

        <div className="flex items-center flex-col justify-center mt-4 p-4 md:w-1/2">
          <img
            src={shef}
            alt="shef-image"
            className="w-auto h-auto max-w-full max-h-[500px] object-cover rounded-lg hidden md:block"
          />
        </div>

        <div className="flex items-center justify-center p-6 md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Book a Table
            </h2>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                id="date"  // Adding id here
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                name="time"
                id="time"  // Adding id here
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"  // Adding id here
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                autoComplete="off"
                min="1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"  // Adding id here
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-gray-700 mb-2">Contact</label>
              <input
                type="text"
                name="contact"
                id="contact"  // Adding id here
                value={formData.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
