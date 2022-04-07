import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
// import Experiment from './pages/Experiment';

// TODO: make it responsive

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="shadow">
          <h1>react-router practice</h1>
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
          {/* <Link to='/experiment'>
            <button className="link shadow-hover">Experiment</button>
          </Link> */}
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id/*' element={<PostDetails />} />
          {/* <Route path='/experiment' element={<Experiment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
