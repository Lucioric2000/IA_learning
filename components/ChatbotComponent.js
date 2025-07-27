// components/Chatbot.jsx
import React, { useState } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatState, setChatState] = useState('GREETING');
  const [userDetails, setUserDetails] = useState({});

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      initiateChat();
    }
  };

  const initiateChat = () => {
    setChatState('ASKED_NAME');
    setMessages([
      {
        text: "Hello! I can help you book a conference with one of our travel representatives. What is your full name?",
        sender: 'bot'
      }
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    handleChatbotLogic(inputValue);
    setInputValue('');
  };

  const handleChatbotLogic = (userInput) => {
    // Implementar la lógica del chatbot aquí
    // Similar a la versión original pero usando setState
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
      >
        <ChatBubbleLeftIcon className="h-7 w-7" />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-xl border-b">
            <h3 className="font-bold text-lg">Conference Booking</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-800">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`w-fit max-w-[85%] p-3 mb-3 ${
                  message.sender === 'user'
                    ? 'chat-bubble-user self-end'
                    : 'chat-bubble-bot self-start'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t bg-gray-50 rounded-b-xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
