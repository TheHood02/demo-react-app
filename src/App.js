import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import LinkButton from './components/linkButton/LinkButton';

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
          <ToggleSwitch />
          <div className="links">
            <LinkButton to="/" title="Home" />
            <LinkButton to="/about" title="About" />
            <LinkButton to="/contact" title="Contact" />
            <LinkButton to="/posts" title="Posts" />
          </div>
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
