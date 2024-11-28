// src/pages/ServicesAdminPage.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

const ServicesAdminPage = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    imageUrl: ''
  });

  // Fetch services from Firestore
  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = await db.collection('services').get();
      setServices(servicesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchServices();
  }, []);

  // Add a new service
  const handleAddService = async () => {
    if (newService.name && newService.description) {
      await db.collection('services').add(newService);
      setNewService({ name: '', description: '', imageUrl: '' });
    }
  };

  // Handle input changes for new service
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>Manage Services</h2>
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Service Name"
          value={newService.name} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Service Description"
          value={newService.description} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="imageUrl" 
          placeholder="Image URL"
          value={newService.imageUrl} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>
      <div>
        <h3>Existing Services</h3>
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <img src={service.imageUrl} alt={service.name} width={100} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesAdminPage;
