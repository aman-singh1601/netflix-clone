import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';
import './Banner.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
        <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentries' fetchUrl={requests.fetchDocumentries} />
        
    </div>
  );
}

export default App;
