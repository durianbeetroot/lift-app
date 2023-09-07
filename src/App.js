import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Services from './pages/Services.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
