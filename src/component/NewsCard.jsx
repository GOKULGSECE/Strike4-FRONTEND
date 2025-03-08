import React from "react";
import "../styles/NewsGrid.css"

const articles = [
  {
    author: "Leah Feiger, Louise Matsakis, Jake Lahut",
    description:
      "Business leaders are paying as much as $5,000,000 to meet one-on-one with the president at his Florida compound...",
    title: "People Are Paying Millions to Dine With Donald Trump at Mar-a-Lago",
    url: "https://www.wired.com/story/people-paying-millions-donald-trump-mar-a-lago/",
    urlToImage:
      "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg",
  },
  {
    author: "John Doe",
    description:
      "Tech industry is booming with AI advancements, leading to innovations in multiple sectors.",
    title: "How AI is Revolutionizing the Tech Industry",
    url: "https://www.example.com/ai-revolution",
    urlToImage: "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg",
  },
  {
    author: "John Doe",
    description:
      "Tech industry is booming with AI advancements, leading to innovations in multiple sectors.",
    title: "How AI is Revolutionizing the Tech Industry",
    url: "https://www.example.com/ai-revolution",
    urlToImage: "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg",
  },
  {
    author: "John Doe",
    description:
      "Tech industry is booming with AI advancements, leading to innovations in multiple sectors.",
    title: "How AI is Revolutionizing the Tech Industry",
    url: "https://www.example.com/ai-revolution",
    urlToImage: "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg",
  },
  {
    author: "John Doe",
    description:
      "Tech industry is booming with AI advancements, leading to innovations in multiple sectors.",
    title: "How AI is Revolutionizing the Tech Industry",
    url: "https://www.example.com/ai-revolution",
    urlToImage: "https://media.wired.com/photos/67c7052b740da90b2e8bbbde/191:100/w_1280,c_limit/GettyImages-2062120626%20(1).jpg",
  },
];

const NewsCard = () => {
  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img src={article.urlToImage} alt={article.title} className="news-image" />
          <div className="news-content">
            <h3 className="news-title">{article.title}</h3>
            <p className="news-author">{article.author}</p>
            <p className="news-description">
              {article.description.length > 120 ? `${article.description.substring(0, 120)}...` : article.description}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
