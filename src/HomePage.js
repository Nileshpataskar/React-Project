import React, { useState, useEffect } from "react";
import "./HomePage.css";
import TopPart from "./TopPart";

function HomePage() {
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);


  const [visibleArticles, setVisibleArticles] = useState(5);

  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=b4f8ab34b4d8415fbb012117184852a9`;
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData.status === "ok") {
          setData3(responseData.articles);
        } else {
          console.log("Error occurred in home page");
        }
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };

    const fetchData4 = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=apple&apiKey=b4f8ab34b4d8415fbb012117184852a9`;
        const response4 = await fetch(url);
        const responseData4 = await response4.json();

        if (responseData4.status === "ok") {
          setData4(responseData4.articles);
        } else {
          console.log("Error occurred in home page");
        }
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };
    const fetchData5 = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=apple&apiKey=b4f8ab34b4d8415fbb012117184852a9`;
        const response5 = await fetch(url);
        const responseData5 = await response5.json();

        if (responseData5.status === "ok") {
          setData5(responseData5.articles);
        } else {
          console.log("Error occurred in home page");
        }
      } catch (err) {
        console.log("Error occurred in home page while fetching", err);
      }
    };

    fetchData3();
    fetchData4();
    
    fetchData5();
  }, []);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  return (
    <div>
      <TopPart />

      <div className="Mai">
        <div className="MainImage">
          
          
          {data5 &&
            data5.slice(0,1 ).map((article, index) => (
              <div className="home--card" key={index}>
               
                <img
                  className=""
                  src={article.urlToImage}
                  width={600}
                  height={500}
                  alt="alt"
                />
  

              </div>
            ))}

            <div className="secondImage">            {data5 &&
            data5.slice(1,2 ).map((article, index) => (
              <div className="home--card" key={index}>
               
                <img
                  className=""
                  src={article.urlToImage}
                  width={400}
                  height={250}
                  alt="alt"
                />
  

              </div>
            ))}
             {data5 &&
            data5.slice(2,3 ).map((article, index) => (
              <div className="home--card" key={index}>
               
                <img
                  className=""
                  src={article.urlToImage}
                  width={400}
                  height={250}
                  alt="alt"
                />
  

              </div>
            ))}
            </div>

        </div>
      </div>

      <h1>The Latest</h1>

      <div className="homelander">
        <div className="scrollable-row">
          {data3 &&
            data3.slice(0, visibleArticles).map((article, index) => (
              <div className="home-article-card" key={index}>
                <img
                  className="article-image"
                  src={article.urlToImage}
                  width={200}
                  height={150}
                  alt="alt"
                />
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <p className="article-publishedAt">{article.publishedAt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {data3.length > visibleArticles && (
        <button className="load" onClick={loadMoreArticles}>
          View More
        </button>
      )}

      {/* Second PArt */}
      <h1>Latest Articles</h1>
      <div className="homelander2">
        <div className="scrollable-row">
          {data4 &&
            data4.slice(0, visibleArticles).map((article, index) => (
              <div className="home-article-card" key={index}>
                <img
                  className="article-image"
                  src={article.urlToImage}
                  width={200}
                  height={150}
                  alt="alt"
                />
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <p className="article-publishedAt">{article.publishedAt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {data4.length > visibleArticles && (
        <button className="load" onClick={loadMoreArticles}>
          View More
        </button>
      )}

<h1>Latest Stories</h1>
<div className="homelander2">
        <div className="scrollable-row">
          {data4 &&
            data4.slice(0, visibleArticles).map((article, index) => (
              <div className="home-article-card" key={index}>
                
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <p className="article-publishedAt">{article.publishedAt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {data4.length > visibleArticles && (
        <button className="load" onClick={loadMoreArticles}>
          View More
        </button>
      )}
    </div>
  );
}

export default HomePage;
