import React, { useState } from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState("");

  return (
    <HashRouter>

      <Nav theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home theme= {theme}/>} />
        <Route path="/resume" element={<Resume theme = {theme} />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
