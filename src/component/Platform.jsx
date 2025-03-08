import React, { useState } from "react";
import "../styles/Platform.css";
import { Avatar, Dropdown, Menu, Modal, Button } from "antd";
import { ManOutlined, WomanOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";

const userStocks = [
  { name: "AAPL", value: "$1450", change: "+5.2%" },
  { name: "GOOGL", value: "$2800", change: "-2.1%" },
  { name: "TSLA", value: "$700", change: "+3.7%" },
];

const wishlistStocks = ["NFLX", "MSFT", "AMZN"];

const portfolio = [
  { name: "AAPL", shares: 10, total: "$14,500", profitLoss: "+$700" },
  { name: "GOOGL", shares: 5, total: "$14,000", profitLoss: "-$300" },
  { name: "TSLA", shares: 8, total: "$5,600", profitLoss: "+$200" },
  { name: "AMZN", shares: 12, total: "$18,900", profitLoss: "+$1,250" },
  { name: "MSFT", shares: 6, total: "$14,700", profitLoss: "-$500" },
  { name: "NFLX", shares: 15, total: "$7,250", profitLoss: "+$350" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "META", shares: 4, total: "$10,500", profitLoss: "+$600" },
  { name: "AMD", shares: 7, total: "$6,200", profitLoss: "-$150" },
  { name: "BABA", shares: 10, total: "$8,750", profitLoss: "+$500" },
  { name: "DIS", shares: 11, total: "$9,900", profitLoss: "-$350" },
];


const Platform = () => {
  const [userGender, setUserGender] = useState("male");
  const [wishlist, setWishlist] = useState(wishlistStocks);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleWishlistClick = (stock) => {
    setSelectedStock(stock);
    setModalVisible(true);
  };

  const addToWishlist = () => {
    if (selectedStock) {
      if (wishlist.length >= 6) {
        alert("Wishlist can have a maximum of two stocks.");
        return; 
      }
  
      if (!wishlist.includes(selectedStock.name)) {
        setWishlist([...wishlist, selectedStock.name]);
      }
    }
    setModalVisible(false);
  };
  

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <a href="#">Profile</a>,
    },
    {
      key: "2",
      icon: <PoweroffOutlined />,
      label: <a href="/">Logout</a>,
    },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <div className="hometopic">
          <h1>FlowFi</h1>
          <h1>FlowFi</h1>
        </div>
        <a href="/homepage">Home</a>
        <a href="/platform">Platform</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/insights">Insights</a>

        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
  <div className="profile-icon" onClick={(e) => e.preventDefault()}>
    <Avatar
      icon={userGender === "male" ? <ManOutlined /> : <WomanOutlined />}
      style={{ backgroundColor: "#87d068", cursor: "pointer" }}
    />
  </div>
</Dropdown>
      </div>

      {/* Main Dashboard Layout */}
      <div className="platform">
        {/* Left Panel - Current Values & Wishlist */}
        <div className="left-panel">
          
          <h3>Wishlist</h3>
          <ul className="wishlist">
            {wishlist.map((stock, index) => (
              <li key={index}>{stock}</li>
            ))}
          </ul>
        </div>

        {/* Middle Panel - Portfolio (Scrollable) */}
        <div className="middle-panel">
          <h2>Portfolio Overview</h2>
          <div className="portfolio-container">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Shares</th>
                  <th>Total Value</th>
                  <th>Profit/Loss</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.shares}</td>
                    <td>{stock.total}</td>
                    <td className={stock.profitLoss.includes("+") ? "profit" : "loss"}>{stock.profitLoss}</td>
                    <td>
                      <button className="btn" size="small" onClick={() => handleWishlistClick(stock)}>Wishlist</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        title="Stock Details"
        className="mod"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <button key="buy" type="primary" className="btn">
            Buy
          </button>,
          <button key="wishlist" onClick={addToWishlist} className="btn">
            Add to Wishlist
          </button>,
        ]}
      >
        {selectedStock && (
          <div>
            <p><strong>Stock:</strong> {selectedStock.name}</p>
            <p><strong>Total Value:</strong> {selectedStock.total}</p>
            <p>
              <strong>Profit/Loss:</strong> 
              <span className={selectedStock.profitLoss.includes("+") ? "profit" : "loss"}>
                {selectedStock.profitLoss}
              </span>
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Platform;
