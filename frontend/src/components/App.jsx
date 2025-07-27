// components/App.jsx
import React, { useState } from 'react';
import Header from './Header';
import TravelForm from './TravelForm';
import AdviceOutput from './AdviceOutput';
import Chatbot from './Chatbot';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const prompt = `
        You are an expert travel advisor. Generate a detailed travel plan formatted in clean HTML.
        The user wants to go to: ${formData.destination}.
        Time of year: ${formData.timeOfYear}.
        Primary transportation: ${formData.transportation}.
        Age group: ${formData.age}.
        
        Please provide the following sections:
        - A brief, engaging introduction to the destination.
        - Top 5 Must-Do Activities with short descriptions.
        - Recommended Packing List based on the season.
        - Local Cuisine to Try with examples.
        - Transportation tips for getting around the destination.
        - Cultural Etiquette and safety notes.
        - Example flight and hotel suggestions (mock data is fine).
      `;

      const baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? `${window.location.protocol}//${window.location.hostname}:5000`
        : `${window.location.protocol}//${window.location.hostname}`;

      const response = await fetch(`${baseUrl}/api/get-advice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        const textWithoutHtml = text.replace(/```[a-zA-Z]*\n|\n```/g, '');
        setAdvice(textWithoutHtml);
      }
    } catch (error) {
      console.error('Error:', error);
      setAdvice('<p class="text-red-500">An error occurred while fetching travel advice. Please try again later.</p>');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <TravelForm onSubmit={handleFormSubmit} />
          </div>
          <div className="lg:col-span-3">
            <AdviceOutput advice={advice} loading={loading} />
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default App;