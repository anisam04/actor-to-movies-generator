// import logo from './logo.svg';
// import './App.css';
import ActorToMoviesGenerator from "./components/ActorToMoviesGenerator"
import Navigation from './components/Navigation';
import Example from './components/Example';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 

function App() {
  return (

    <Router>
        <div className="App">
           <Navigation />
           <Routes>
             <Route path="/" exact element={<ActorToMoviesGenerator />} />
             <Route path="/example" exact element={<Example />} />
           </Routes>
        </div>
      </Router>
  );
}

export default App;
