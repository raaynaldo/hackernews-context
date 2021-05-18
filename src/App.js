import './App.css';
import History from './components/History';
import Result from './components/Result';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Result />
      <History />
    </div>
  );
}

export default App;
