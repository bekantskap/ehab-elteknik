import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/Start';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <main className="app-container">
        <Navbar />
        <div
          className={`app-container__wrapper ${darkMode ? 'dark' : 'light'}`}
        >
          <section className="app-container__box">
            <Routes>
              <Route path="/" element={<Start />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </section>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
