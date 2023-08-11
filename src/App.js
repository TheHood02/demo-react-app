import './App.css';

import Router from './Router';
import { ThemeProvider } from './components/ThemeContext';

// TODO: make it responsive

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
