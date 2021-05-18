import { useContext } from 'react';

import { NewsContext } from '../context/news-context';

const Result = () => {
  const newsContext = useContext(NewsContext);
  const { news } = newsContext;

  return (
    <div>
      Result
      {news.map((news) => (
        <div>{news}</div>
      ))}
    </div>
  );
};

export default Result;
