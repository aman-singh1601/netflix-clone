import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
        <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/>
        <Row title='Trending' fetchuRL={requests.fetchTrending} />
        <Row/>
    </div>
  );
}

export default App;
