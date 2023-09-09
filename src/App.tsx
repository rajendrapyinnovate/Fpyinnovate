// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

// Import your components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        
        <Header />

        <nav>
          {/* Navigation links */}
        </nav>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
