import { Routes, Route, BrowserRouter } from "react-router-dom";

// import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import LinkButton from "./components/linkButton/LinkButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import PostDetails from "./pages/postDetails/PostDetails";

import {useTheme, useThemeUpdate} from "./components/ThemeContext";

const Router = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#262626" : "#E1E6EC",
    color: darkTheme ? "#7D7D7D" : "#7D8997",
    boxShadow: darkTheme
      ? "-9px -9px 16px 0 rgba(58, 58, 58, 0.6), 9px 9px 16px 0 rgba(0,0,0,.5)"
      : "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
  };

  return (
    <div className="App" style={themeStyles}>
      <BrowserRouter>
        <nav className="shadow">
          <h1>demo-react-app</h1>
          {/* <ToggleSwitch /> */}
          <button className="link shadow-hover" onClick={toggleTheme}>
            toggle theme
          </button>
          <div className="links">
            <LinkButton to="/" title="Home" />
            <LinkButton to="/about" title="About" />
            <LinkButton to="/contact" title="Contact" />
            <LinkButton to="/posts" title="Posts" />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id/*" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
