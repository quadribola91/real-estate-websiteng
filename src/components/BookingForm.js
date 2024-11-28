import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingForm = () => {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [specification, setSpecification] = useState('');
  const [actionType, setActionType] = useState(''); // New field for Rent/Buy/Lease

  // Handle date change
  const handleDateChange = (date) => {
    setDate(date);
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle specification change
  const handleSpecificationChange = (e) => {
    setSpecification(e.target.value);
  };

  // Handle action type change (Rent/Buy/Lease)
  const handleActionTypeChange = (e) => {
    setActionType(e.target.value);
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${date} at ${location} with ${specification} specifications for ${actionType}.`);
    // Additional logic to handle the booking can go here.
  };

  // Disable all days except Tuesday (2), Wednesday (3), and Saturday (6)
  const tileDisabled = ({ date }) => {
    const dayOfWeek = date.getDay();
    return !(dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 6); // Disable all except Tue, Wed, and Sat
  };

  return (
    <section id="booking" className="p-8 bg-gray-100 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Book an Inspection</h2>
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded">
        
        {/* Name input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300" required />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300" required />
        </div>
        
        {/* Rent/Buy/Lease dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Action Type</label>
          <select 
            value={actionType} 
            onChange={handleActionTypeChange} 
            className="w-full p-2 border border-gray-300"
            required
          >
            <option value="">Select Action</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
            <option value="Lease">Lease</option>
          </select>
        </div>

        {/* Location dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Location</label>
          <select 
            value={location} 
            onChange={handleLocationChange} 
            className="w-full p-2 border border-gray-300"
            required
          >
            <option value="">Select Location</option>
            <option value="Yaba/Somolu/Bariga">Yaba/Somolu/Bariga</option>
            <option value="Anthony/Maryland">Anthony/Maryland</option>
            <option value="Ifako/Gbagada/Oworo">Ifako/Gbagada/Oworo</option>
            <option value="Ogudu/Alapere/Ketu">Ogudu/Alapere/Ketu</option>
            <option value="Surulere">Surulere</option>
          </select>
        </div>

        {/* Specification dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Specifications</label>
          <select 
            value={specification} 
            onChange={handleSpecificationChange} 
            className="w-full p-2 border border-gray-300"
            required
          >
            <option value="">Select Specification</option>
            <option value="1-Roomself contain">1-Roomself contain</option>
            <option value="1-Bedroom miniflat">1-Bedroom miniflat</option>
            <option value="2-Bedroom miniflat">2-Bedroom miniflat</option>
            <option value="3-Bedroom miniflat">3-Bedroom miniflat</option>
            <option value="Studio">Studio</option>
            <option value="Duplex">Duplex</option>
          </select>
        </div>

        {/* Date picker */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Preferred Inspection Date</label>
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            tileDisabled={tileDisabled} // Apply the tileDisabled logic here
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Book Inspection</button>
      </form>
    </section>
  );
};

export default BookingForm;
