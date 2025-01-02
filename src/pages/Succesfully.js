import React from 'react';
import success from '../assets/Success.gif';

const Succesfully = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <img
        src={success}
        alt="successGif"
        style={{ width: '200px', height: '200px', marginBottom: '20px' }}
      />
      <h1 style={{ fontSize: '24px', color: '#4CAF50', fontWeight: 'bold' }}>
        Successfully Booking
      </h1>
    </div>
  );
};

export default Succesfully;
