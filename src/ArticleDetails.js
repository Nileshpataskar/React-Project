import React, { useContext } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import { ArticleContext } from './ArticleContext';
import he from 'he';

import Logo from './Logo';

function ArticleDetails() {
  const { id } = useParams();
  const { data } = useContext(ArticleContext);
  const article = data.find((article) => article.title === id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='leftLogo'>  
        <Logo/>
        <button className='backbutton' onClick={goBack}>BACK</button>

      </div>
      {article ? (
        <div className='grisha'>
          <div className='articleDetails'>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} width={600} alt="alt" />
            <p>{article.description}</p>
            <p>{he.decode(article.content)}</p>
            <h5>Author: {article.author}</h5>
            <h5>Date: {article.publishedAt}</h5>
            <h4>
              <a href={article.url} target='_blank' rel='noopener noreferrer'>
                Click here to Explore More
              </a>
            </h4>
          </div>
        </div>
      ) : (
        <p>Article not found.</p>
      )}
    </div>
  );
}

export default ArticleDetails;
