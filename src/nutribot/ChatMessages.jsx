import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRobot } from 'react-icons/fa';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div id="chat-messages" className="p-4" style={{ height: '400px', overflowY: 'auto' }}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
        >
          {message.sender === 'bot' && (
            <div className="flex-shrink-0">
              <div className="navbar-brand d-flex align-items-center">
                <FaRobot className="me-2" />
              </div>
            </div>
          )}
          <div className={message.sender === 'bot' ? 'ms-3' : ''}>
            <div
              className={`p-3 rounded-3 ${message.sender === 'user' ? 'bg-success text-white' : 'bg-light'}`}
            >
              <p className="mb-0">
                {message.sender === 'bot'
                  ? t(message.text, { defaultValue: message.text }) // fallback si non trouvé
                  : message.text}
              </p>
            </div>
            {message.time && (
              <small className="text-muted">{message.time}</small>
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
