import { useState } from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Posts from './pages/Posts';
import PostDetails from './pages/postDetails/PostDetails';

// TODO: make it responsive

function App() {

  var r = document.querySelector(':root');

  function myFunction_set() {
    r.style.setProperty('--clr', 'var(--clr-dark)');
    r.style.setProperty('--bg-clr', 'var(--bg-clr-dark)');
    r.style.setProperty('--shadow', 'var(--shadow-dark)')
  }

  const [darkMode, setDarkMode] = useState(true);

  const handleMode = () => {
    setDarkMode(prevState => !prevState);
    console.log(darkMode);
    myFunction_set();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="shadow">
          <h1>demo-react-app</h1>
          <ToggleSwitch theme={handleMode} />
          <div className="links">
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
