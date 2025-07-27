// components/App.jsx
import React from 'react';
import Header from './Header';
import TravelForm from './TravelForm';
import AdviceOutput from './AdviceOutput';
import Chatbot from './Chatbot';

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <TravelForm />
          </div>
          <div className="lg:col-span-3">
            <AdviceOutput />
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default App;