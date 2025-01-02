import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Dashboard from '../pages/Dashboard';
import Succesfully from '../pages/Succesfully';

const AllRoutes = () => {
  return (
    <>     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/booked' element={<Succesfully/>} />
        <Route path='*' element={<div>404 - Page Not Found</div>} />
        
      </Routes>
    </>
  )
}

export default AllRoutes
