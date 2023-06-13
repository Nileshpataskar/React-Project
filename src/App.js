import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './ArticleContext';
import ArticlePage from './ArticlePage';
import ArticleDetails from './ArticleDetails';
import HomePage from './HomePage';

function App() {
  return (
    <ArticleProvider>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<ArticlePage />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </ArticleProvider>
  );
}

export default App;
