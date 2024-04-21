import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post from './components/Post';
import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';
import Post4 from './posts/Post4';



import Home from './Home';
import './App.css';
import Post5 from './posts/Post5';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post1" element={<Post1 />} />
          <Route path="/Post2" element={<Post2 />} />
          <Route path="/Post3" element={<Post3 />} />
          <Route path="/Post4" element={<Post4 />} />
          <Route path="/Post5" element={<Post5 />} />


        </Routes>
        <div className="links">
        <Link to="/Post5">Read this post</Link>
        <Link to="/Post4">Read this post</Link>
        <Link to="/Post3">Read this post</Link>
        <Link to="/Post2">Read this post</Link>
        <Link to="/Post1">Read this post</Link>


        </div>
      </div>
    </Router>
  );

}

export default App;
