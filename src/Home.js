import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post from './components/Post';
import "./App.css"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/earplugs.jpeg' className="App-logo" alt="logo" />
        <p>
          <code>This is mugs and earplugs</code>.
        </p>
      </header>
      </div>
  );

}

export default Home;