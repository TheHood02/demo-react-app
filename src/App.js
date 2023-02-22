import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Posts from './pages/Posts';
import PostDetails from './pages/postDetails/PostDetails';

// TODO: make it responsive

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="shadow">
          <h1>demo-react-app</h1>
          <Link to='/'>
            <button className="link shadow-hover">Home</button>
          </Link>
          <Link to='/about'>
            <button className="link shadow-hover">About</button>
          </Link>
          <Link to='/contact'>
            <button className="link shadow-hover">Contact</button>
          </Link>
          <Link to='/posts'>
            <button className="link shadow-hover">Posts</button>
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id/*' element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
