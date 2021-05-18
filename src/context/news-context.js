import { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(['hello', 'test', 'cool']);
  const [histories, setHistories] = useState([]);

  const fetchData = (keySearch) => {
    fetch('https://hn.algolia.com/api/v1/search?query=' + keySearch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.hits);
        setHistories((prevState) => [...prevState, keySearch]);
      });
  };

  return (
    <NewsContext.Provider
      value={{ news: news, histories: histories, fetchData }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
