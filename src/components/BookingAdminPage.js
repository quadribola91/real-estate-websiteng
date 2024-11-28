// src/pages/BookingAdminPage.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

const BookingAdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    propertyId: '',
    date: '',
  });

  // Fetch bookings from Firestore
  useEffect(() => {
    const fetchBookings = async () => {
      const bookingsCollection = await db.collection('bookings').get();
      setBookings(bookingsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBookings();
  }, []);

  // Add a new booking
  const handleAddBooking = async () => {
    if (newBooking.name && newBooking.propertyId && newBooking.date) {
      await db.collection('bookings').add(newBooking);
      setNewBooking({ name: '', propertyId: '', date: '' });
    }
  };

  // Handle input changes for new booking
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>Manage Bookings</h2>
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Customer Name"
          value={newBooking.name} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="propertyId" 
          placeholder="Property ID"
          value={newBooking.propertyId} 
          onChange={handleInputChange} 
        />
        <input 
          type="date" 
          name="date" 
          value={newBooking.date} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddBooking}>Add Booking</button>
      </div>
      <div>
        <h3>Existing Bookings</h3>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <h4>{booking.name}</h4>
              <p>Property ID: {booking.propertyId}</p>
              <p>Booking Date: {booking.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingAdminPage;
