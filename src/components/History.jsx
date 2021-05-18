import { useContext } from 'react';
import { NewsContext } from '../context/news-context';

const History = () => {
  const newsContext = useContext(NewsContext);
  const { histories } = newsContext;
  return (
    <div>
      <h2>History</h2>
      <div>
        {histories.map((history) => (
          <div>{history}</div>
        ))}
      </div>
    </div>
  );
};

export default History;
