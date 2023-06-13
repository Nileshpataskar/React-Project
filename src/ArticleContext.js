import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <ArticleContext.Provider value={{ data, setData }}>
      {children}
    </ArticleContext.Provider>
  );
};

