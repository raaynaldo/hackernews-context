import { createContext, useState } from 'react';

export const NewsContext = createContext();

export default ({ children }) => {
  const [news] = useState(['hello', 'test', 'cool']);
  const [histories] = useState([]);

  return (
    <NewsContext.Provider value={{ news: news, histories: histories }}>
      {children}
    </NewsContext.Provider>
  );
};
