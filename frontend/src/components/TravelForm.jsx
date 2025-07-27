// components/TravelForm.jsx
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const TravelForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    destination: '',
    timeOfYear: 'Any',
    transportation: 'Any',
    age: 'Any'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Plan Your Perfect Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Paris, France"
              required
            />
          </div>
          
          {/* Time of Year Select */}
          <div>
            <label htmlFor="timeOfYear" className="block text-sm font-medium text-gray-700 mb-1">
              Time of Year
            </label>
            <select
              id="timeOfYear"
              name="timeOfYear"
              value={formData.timeOfYear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Any</option>
              <option>Spring (Mar-May)</option>
              <option>Summer (Jun-Aug)</option>
              <option>Autumn (Sep-Nov)</option>
              <option>Winter (Dec-Feb)</option>
            </select>
          </div>

          {/* Transportation Select */}
          <div>
            <label htmlFor="transportation" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Transportation
            </label>
            <select
              id="transportation"
              name="transportation"
              value={formData.transportation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Any</option>
              <option>Plane</option>
              <option>Car</option>
              <option>Train</option>
              <option>Bus</option>
            </select>
          </div>

          {/* Age Group Select */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age Group
            </label>
            <select
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Any</option>
              <option>18-25</option>
              <option>26-40</option>
              <option>41-60</option>
              <option>60+</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Get Travel Advice
        </button>
      </form>
    </div>
  );
};

export default TravelForm;
