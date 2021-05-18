import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsProvider from './context/news-context';

ReactDOM.render(
  <NewsProvider>
    <App />
  </NewsProvider>,
  document.getElementById('root')
);
