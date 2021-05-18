import { useContext } from 'react';

import { NewsContext } from '../context/news-context';

const Result = () => {
  const newsContext = useContext(NewsContext);
  const { news } = newsContext;

  return (
    <div>
      <h2>Result</h2>
      {news.map((news) => (
        <div>{news.title}</div>
      ))}
    </div>
  );
};

export default Result;
