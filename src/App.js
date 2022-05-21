// import logo from './logo.svg';
// import './App.css';
import ActorToMoviesGenerator from "./components/ActorToMoviesGenerator"
import Navigation from './components/Navigation';
import ReadMe from './components/ReadMe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 

function App() {
  return (

    <Router>
        <div className="App">
           <Navigation />
           <Routes>
             <Route path="/" exact element={<ActorToMoviesGenerator />} />
             <Route path="/readme" exact element={<ReadMe />} />
           </Routes>
        </div>
      </Router>
  );
}

export default App;
