import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import HeroNutribot from '../nutribot/HeroNutribot';
import BotHeader from '../nutribot/BotHeader';
import BotResponse from '../nutribot/BotResponse';
import ChatMessages from '../nutribot/ChatMessages';
import UserInput from '../nutribot/UserInput';
import Footer from '../components/common/Footer';
const NutriBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Bonjour ! Je suis Nutribot, votre assistant en nutrition. Comment puis-je vous aider aujourd'hui ?", time: "Aujourd'hui, 10:00" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    const text = inputValue.trim().toLowerCase();
    if (!text) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage = {
        sender: 'bot',
        text: BotResponse[text] || BotResponse["default"]
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <Navigation />
    <HeroNutribot />
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card shadow-sm">
              
              <BotHeader />
              <div className="card-body chat-body p-0">
                <ChatMessages messages={messages} />
                <UserInput
                  inputValue={inputValue}
                  onInputChange={(e) => setInputValue(e.target.value)}
                  onSendMessage={handleSendMessage}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          </div>
        </div></div>
        <Footer />
      
    </>
  );
};

export default NutriBot;
