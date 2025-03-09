import React, { useState } from "react";
import "../styles/NewsGrid.css";
import OverviewPage from "./Overview";
import { Avatar, Dropdown } from "antd";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

// sample data for showing finance news
const articles = [
  {
      "author": "Leah Feiger, Louise Matsakis, Jake Lahut",
      "description": "Business leaders are paying as much as $5,000,000 to meet one-on-one with the president at his Florida compound, sources tell WIRED, while others are paying $1,000,000 apiece to dine with him in a group setting.",
      "publishedAt": "2025-03-04T16:00:23Z",
      "title": "People Are Paying Millions to Dine With Donald Trump at Mar-a-Lago",
      "url": "https://www.wired.com/story/people-paying-millions-donald-trump-mar-a-lago/",
      "urlToImage": "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg"
  },
  {
      "author": "Jack Newsham,Katie Balevic,Lakshmi Varanasi,Kenneth Niemeyer",
      "description": "A list showing White House DOGE staffers reveals around 30 young tech, finance and legal professionals remaking federal government.",
      "publishedAt": "2025-02-11T09:07:02Z",
      "title": "We got a DOGE staff list. From a McKinsey alum to a former Clarence Thomas clerk, here are the workers powering Elon Musk's cost-cutting squad.",
      "url": "https://www.businessinsider.com/doge-staff-list-white-house-2025-2",
      "urlToImage": "https://i.insider.com/67aa7861eb4be2fff9a42f4e?width=1200&format=jpeg"
  },
  {
      "author": "Nathan Edwards",
      "description": "The Department of Government Efficiency has requested access to the Internal Revenue Service’s taxpayer data system — potentially giving it access to highly sensitive information, including Social Security Numbers and tax returns — according to a report from …",
      "publishedAt": "2025-02-17T20:05:42Z",
      "title": "DOGE is trying to access the IRS’s data on millions of taxpayers",
      "url": "https://www.theverge.com/news/614082/doge-targets-irs-taxpayer-information",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/STKS486_DOGE_DEPARTMENT_C.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200"
  },
  {
      "author": "Julia Pugachevsky",
      "description": "These days, more men are getting cosmetic procedures. One NYC doctor says demand for penis filler and scrotum Botox is soaring.",
      "publishedAt": "2025-02-15T09:30:02Z",
      "title": "Forget male Botox — finance bros are lining up to get penis filler",
      "url": "https://www.businessinsider.com/penis-filler-demand-grows-nyc-doctor-treats-finance-bros-2025-2",
      "urlToImage": "https://i.insider.com/67af973e7bb3f854015cfade?width=1200&format=jpeg"
  },
  {
      "author": "Laurel Wamsley",
      "description": "Vought was an architect of Project 2025. He takes over at the consumer finance watchdog as Elon Musk's representatives gained access to the bureau's systems and accounts, including sensitive data.",
      "publishedAt": "2025-02-08T16:01:27Z",
      "title": "Russell Vought takes the helm at CFPB as Musk's DOGE accesses key systems",
      "url": "https://www.npr.org/2025/02/08/nx-s1-5290914/russell-vought-cfpb-doge-access-musk",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5542x3117+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc9%2F69%2Fb222865848de96f529a3ea912091%2Fgettyimages-2193480595.jpg"
  }
]

const NewsCard = () => {
  // const articles = useSelector((state) => state.preference.preferences);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [userGender, setUserGender] = useState("male");

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

        <Dropdown trigger={["click"]}>
          <div className="profile-icon" onClick={(e) => e.preventDefault()}>
            <Avatar
              icon={userGender === "male" ? <ManOutlined /> : <WomanOutlined />}
              style={{ backgroundColor: "#87d068", cursor: "pointer" }}
            />
          </div>
        </Dropdown>
      </div>

      {/* News Cards */}
      <div className="news-container">
        <div className="news-scroll">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="news-card" key={index} onClick={() => setSelectedArticle(article)}>
                <img src={article.urlToImage} alt={article.title} className="news-image" />
                <div className="news-content">
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-author">{article.author}</p>
                  <p className="news-description">
                    {article.description.length > 120
                      ? `${article.description.substring(0, 120)}...`
                      : article.description}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                    Read More →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="marquee-container">
              <p className="marquee-text">No articles available</p>
            </div>
          )}
        </div>

        {/* Overview Page for Selected Article */}
        {selectedArticle && (
          <OverviewPage article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        )}
      </div>
    </>
  );
};

export default NewsCard;
