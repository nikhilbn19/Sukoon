import { useState } from 'react';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Chatbot.css';
import axios from 'axios';
import Header from './Header';

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([]);

  async function generateAnswer() {
    setMessages([...messages, { text: question, user: true }]);
    setAnswer("Loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCNxnjQ0oGdP9mJnx0QCEtg9ytaklNUlh8",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      const botAnswer = response.data.candidates[0].content.parts[0].text;
      setMessages([...messages, { text: question, user: true }, { text: botAnswer, user: false }]);
      setAnswer("");
      setQuestion("");
    } catch (error) {
      setMessages([...messages, { text: question, user: true }, { text: "Error generating answer. Please try again.", user: false }]);
      setAnswer("");
    }
  }

  return (
    <>
    <Header/>
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            <div className="icon">
              {msg.user ? (
                <FontAwesomeIcon icon={faUser} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faRobot} size="2x" />
              )}
            </div>
            <div className="content">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          //rows=""
           cols="20"  
          placeholder="Write a message..."
        ></textarea>
        <button onClick={generateAnswer}>➤</button>
      </div>
    </div>
    </>
  );
}

export default Chatbot;
