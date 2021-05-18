import { useContext, useState } from 'react';
import { NewsContext } from '../context/news-context';

const Search = () => {
  const newsContext = useContext(NewsContext);
  const { fetchData } = newsContext;
  const [keySearch, setKeySearch] = useState('');

  const submitHanlder = (e) => {
    e.preventDefault();
    fetchData(keySearch);
  };

  return (
    <form onSubmit={submitHanlder}>
      <input
        type="text"
        value={keySearch}
        onChange={(e) => setKeySearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
