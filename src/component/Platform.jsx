import React, { useState } from "react";
import "../styles/Platform.css";
import { Avatar, Dropdown, Modal, Button } from "antd";
import { ManOutlined, WomanOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";

const wishlistStocks = [
  { name: "NFLX", total: "$7,250", profitLoss: "+$350" },
  { name: "MSFT", total: "$14,700", profitLoss: "-$500" },
  { name: "AMZN", total: "$18,900", profitLoss: "+$1,250" },
];

const portfolio = [
  { name: "AAPL", shares: 10, total: "$14,500", profitLoss: "+$700" },
  { name: "GOOGL", shares: 5, total: "$14,000", profitLoss: "-$300" },
  { name: "TSLA", shares: 8, total: "$5,600", profitLoss: "+$200" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
  { name: "NVDA", shares: 9, total: "$11,300", profitLoss: "-$400" },
];

const Platform = () => {
  const [userGender, setUserGender] = useState("male");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  // Function to handle wishlist stock click
  const handleWishlistClick = (stock) => {
    setSelectedStock(stock);
    setModalVisible(true);
  };

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: <a href="#">Profile</a> },
    { key: "2", icon: <PoweroffOutlined />, label: <a href="/">Logout</a> },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <div className="hometopic">
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
        {/* Left Panel - Wishlist */}
        <div className="left-panel">
          <h3>Wishlist</h3>
          <ul className="wishlist">
            {wishlistStocks.map((stock, index) => (
              <li key={index}>
                
                {/* <button className="wishlist-btn" onClick={() => handleWishlistClick(stock)}>
                {stock.name}
                </button> */}
                
                <p className="wishlist-btn" onClick={()=>handleWishlistClick(stock)}>{index+1}. {stock.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Panel - Portfolio */}
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
                </tr>
              </thead>
              <tbody>
                {portfolio.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.shares}</td>
                    <td>{stock.total}</td>
                    <td className={stock.profitLoss.includes("+") ? "profit" : "loss"}>
                      {stock.profitLoss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Wishlist Stock Details Modal */}
      <Modal
        title="Stock Details"
        className="mod"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        // footer={[
        //   <Button key="buy" type="primary">
        //     Buy
        //   </Button>,
        //   <Button key="wishlist">
        //     Add to Wishlist
        //   </Button>,
        // ]}
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
