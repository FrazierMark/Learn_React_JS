import './App.css';
import Row from './components/Row'
import requests from './request'


function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
