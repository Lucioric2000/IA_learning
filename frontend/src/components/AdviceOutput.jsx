// components/AdviceOutput.jsx
import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const AdviceOutput = ({ advice, loading }) => {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Your AI-Generated Itinerary</h2>
      <div className="prose max-w-none h-[calc(100%-4rem)] overflow-y-auto pr-2">
        {advice ? (
          <div dangerouslySetInnerHTML={{ __html: advice }} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <GlobeAltIcon className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold">Your travel advice will appear here.</h3>
            <p>Fill out the form on the left to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdviceOutput;
