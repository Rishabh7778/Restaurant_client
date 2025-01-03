import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { BASE_URL } from "../service/helper";
import { useTitle } from "./UseTitle";

const toastOption = {
  position: "bottom-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Dashboard = () => {
  useTitle("Dashboard");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  const fetchBookings = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/bookings`);
      setBookings(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching bookings:", err.message);
      setError("Failed to fetch bookings.");
      toast.error(error, toastOption);
    }
  }, [error]); 

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]); 

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/bookings/${id}`);
      fetchBookings();
      toast.success("Successfully Deleted", toastOption);
    } catch (err) {
      console.error("Error deleting booking:", err.message);
      setError("Error deleting booking. Try again later.");
      toast.error(error, toastOption);
    }
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Current Bookings</h2>
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="flex justify-between items-center border-b-2 p-4 border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-gray-700">
                <p className="text-lg font-medium">
                  <strong>Date:</strong> {booking.date} | <strong>Time:</strong> {booking.time}
                </p>
                <p className="text-md">
                  <strong>Guests:</strong> {booking.guests} | <strong>Name:</strong> {booking.name}
                </p>
              </div>
              <button
                onClick={() => deleteBooking(booking._id)}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
