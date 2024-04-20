import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post from './components/Post';
import Post1 from './Post1';
import Post2 from './Post2';

import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post1" element={<Post1 />} />
          <Route path="/Post2" element={<Post2 />} />
        </Routes>
        <Link to="/Post1">Read this post</Link>
        <Link to="/Post2">Read this post</Link>
        </div>
    </Router>
  );

}

export default App;
