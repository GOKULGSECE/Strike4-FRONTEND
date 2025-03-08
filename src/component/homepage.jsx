import { useState } from "react";
import "../styles/home.css";

const Homepage =()=> {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you?", sender: "bot" }]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");
    setTimeout(() => {
      const botReply = generateBotResponse(userInput);
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    }, 1000);
  };

  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("hello")) return "Hi! How can I help?";
    if (lowerInput.includes("help")) return "Sure! What do you need help with?";
    return "I'm not sure about that. Can you clarify?";
  };

  return (
    <>
      <div className="navigation-bar">
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Insights</a>
        <div className="profile-icon">
          <i className="fas fa-user"></i>
        </div>
      </div>

      <div className="home-container">
        <div className="homeleft">Left Content</div>
        <div className="homecenter">Center Content</div>
        <div className="homeright">Right Content</div>
      </div>

      <button className="chatbot-button" onClick={() => setChatOpen(!chatOpen)}>
        💬 Chat
      </button>
      {chatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
