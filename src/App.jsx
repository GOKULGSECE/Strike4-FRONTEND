import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
    <div class="navigation-bar">
      <a href="#">Home</a>
      <a href="#">Dashboard</a>
      <a href="#">Insights</a>
      <div class="profile-icon"> 
      <i class="fas fa-user"></i>
      </div>
</div>

    <div className="home-container">
      <div className="left">Left Content</div>
      <div className="center">Center Content</div>
      <div className="right">Right Content</div>
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
            <p>Hello! How can I assist you?</p>
          </div>
          <input type="text" placeholder="Type a message..." className="chatbot-input" />
        </div>
      )}
    </>
  )
}

export default App
