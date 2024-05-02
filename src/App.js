import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';
import Post4 from './posts/Post4';
import Post5 from './posts/Post5';
import Post6 from './posts/Post6';
import Post7 from './posts/Post7';
import Post8 from './posts/Post8';
import Post9 from './posts/Post9';




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
          <Route path="/Post6" element={<Post6 />} />
          <Route path="/Post7" element={<Post7 />} />
          <Route path="/Post8" element={<Post8 />} />
          <Route path="/Post9" element={<Post9 />} />


        </Routes>
        <div className="links">
        <Link to="/Post9">Read this post</Link>
        <Link to="/Post8">Read this post</Link>
        <Link to="/Post7">Read this post</Link>
        <Link to="/Post6">Read this post</Link>
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
