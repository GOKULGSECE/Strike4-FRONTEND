import { useState } from "react";
import "../styles/home.css";
import { Switch } from "antd";

const investors = [
  {
    name: "Warren Buffett",
    nickname: "The Oracle of Omaha",
    strategy: "Value investing, buying businesses with strong fundamentals, durable competitive advantages, and skilled management. Prefers long-term investments in undervalued companies.",
    notableAchievements: "Built Berkshire Hathaway into a multi-billion-dollar conglomerate. Emphasizes patience and sticking to what you understand."
  },
  {
    name: "Charlie Munger",
    nickname: "The Right-Hand of Warren Buffett",
    strategy: "Value investing and using mental models to evaluate investments across various disciplines.",
    notableAchievements: "Helped Buffett turn Berkshire Hathaway into one of the most successful investment firms in history."
  },
  {
    name: "George Soros",
    nickname: "The Man Who Broke the Bank of England",
    strategy: "Macroeconomic investment strategy, particularly short-selling currencies and making bold bets on global economic trends.",
    notableAchievements: "Founded Soros Fund Management and made massive returns through speculative investing and hedge fund strategies."
  },
  {
    name: "Peter Lynch",
    nickname: "The Magellan Fund",
    strategy: "Growth investing with a focus on investing in what you know. Believes in researching companies positioned for long-term growth.",
    notableAchievements: "Managed Fidelity's Magellan Fund, achieving an average annual return of 29% between 1977 and 1990."
  },
  {
    name: "Ray Dalio",
    nickname: "Bridgewater Associates",
    strategy: "Macroeconomic focus with a systematic approach, balancing risk with diversification.",
    notableAchievements: "Founded Bridgewater Associates, the world's largest hedge fund, focusing on global economic trends and risk parity."
  },
  {
    name: "Carl Icahn",
    nickname: "Activist Investor",
    strategy: "Activist investing, buying large stakes in companies and pushing for changes to improve shareholder value.",
    notableAchievements: "Built a fortune by taking control of companies like TWA, Blockbuster, and Herbalife."
  },
  {
    name: "John Templeton",
    nickname: "Global Value Investor",
    strategy: "Global investing, especially in emerging markets. Contrarian investing style, often buying when markets are down.",
    notableAchievements: "Created the Templeton Growth Fund and was a pioneer in global investing, amassing billions in assets under management."
  },
  {
    name: "Benjamin Graham",
    nickname: "The Father of Value Investing",
    strategy: "Value investing, focusing on buying stocks undervalued compared to their intrinsic value.",
    notableAchievements: "Author of 'The Intelligent Investor' and 'Security Analysis,' fundamental texts for value investors."
  },
  {
    name: "Jesse Livermore",
    nickname: "The Boy Plunger",
    strategy: "Stock market speculation, market timing, and short-selling. Combined technical analysis with psychological insights.",
    notableAchievements: "Known for successfully shorting the market during the 1929 crash."
  },
  {
    name: "Mark Cuban",
    nickname: "Entrepreneur and Investor",
    strategy: "Investing in disruptive technology and high-potential startups. Makes bold bets on emerging industries and companies.",
    notableAchievements: "Built a fortune by selling Broadcast.com to Yahoo. Prominent venture capitalist in tech and entertainment."
  }
];

const InvestorList = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="investor-container">
      <div className="toggle-view">
        <span>List View</span>
        <Switch checked={isGridView} onChange={() => setIsGridView(!isGridView)} />
        <span>Grid View</span>
      </div>
      <div className={isGridView ? "grid-view" : "list-view"}>
        {investors.map((investor, index) => (
          <div key={index} className="investor-card">
            <img src={investor.image} alt={investor.name} className="investor-image" />
            <div className="investor-info">
              <h2>{investor.name}</h2>
              <h3>{investor.nickname}</h3>
              <p ><strong>Strategy:</strong> {investor.strategy}</p>
              <p><strong>Achievements:</strong> {investor.notableAchievements}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorList;
