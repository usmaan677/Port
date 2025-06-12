import React, { useState } from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className ={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} min-h-screen flex flex-col`} >
      <HashRouter>
        <Nav theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home theme= {theme}/>} />
          <Route path="/resume" element={<Resume theme = {theme} />} />
          <Route path="/contact" element={<Contact theme = {theme} />} />
        </Routes>
        <Footer theme = {theme}/>
      </HashRouter>
    </div>
  );
}

export default App;
