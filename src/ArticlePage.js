import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ArticleContext } from "./ArticleContext";
import "./App.css";
import TopPart from "./TopPart";



function ArticlePage() {
  const { category } = useParams();
  const [visibleArticles, setVisibleArticles] = useState(7);
  const { data, setData } = useContext(ArticleContext);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "b4f8ab34b4d8415fbb012117184852a9";
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=en&apiKey=${apiKey}`;
        const response = await fetch(url);
        const responseData = await response.json();
        if (responseData.status === "ok") {
          setData(responseData.articles);
          console.log(responseData.articles);
        } else {
          console.log("Error occurred while fetching data");
        }
      } catch (err) {
        console.log("Error occurred while fetching", err);
      }
    };

    const fetchData2 = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4f8ab34b4d8415fbb012117184852a9`;
        const response2 = await fetch(url);
        const responseData2 = await response2.json();
        if (responseData2.status === "ok") {
          setData2(responseData2.articles);
          console.log(responseData2.articles);
        } else {
          console.log("Error occurred while fetching data");
        }
      } catch (err) {
        console.log("Error occurred while fetching", err);
      }
    };

    fetchData();
    fetchData2();
  }, [category, setData]);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 7);
  };

  return (
    <div>
      
      <TopPart />

      <div className="article-page">
        <div className="leftarticleContainer">
          <h2 className="category-title">{category}</h2>

          {data &&
            data.slice(0, visibleArticles).map((article, index) => (
              <div className="article-card" key={index}>
                <img
                  className="article-image2"
                  src={article.urlToImage}
                  alt="alt"
                />
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <p className="article-publishedAt">{article.publishedAt}</p>
                </div>
                <Link to={`/article/${article.title}`} className="readmorelink">
                Read More
              </Link>
              </div>
            ))}

          {data.length > visibleArticles && (
            <button className="loadmorebutton" onClick={loadMoreArticles}>
              Load More
            </button>
          )}
        </div>
        <div className="rightarticleContainer">
          <h2 className="category-title">Top Headlines</h2>
          {data2 &&
            data2.slice(0, visibleArticles).map((article, index) => (
              <div className="article-card" key={index}>
                <img
                  className="article-image2"
                  src={article.urlToImage}
                  alt="alt"
                  width={600}
                />
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <p className="article-publishedAt">{article.author}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
