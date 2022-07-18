import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/Start';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import React, { createContext, useState } from 'react';
import Signs from './pages/Signs';
import Manual from './pages/Manual';

export const SettingsContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const providerValue = React.useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode, setDarkMode]
  );

  return (
    <SettingsContext.Provider value={providerValue}>
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
                <Route path="/signs" element={<Signs />}></Route>
                <Route path="/manual" element={<Manual />}></Route>
              </Routes>
            </section>
          </div>
          <Footer />
        </main>
      </Router>
    </SettingsContext.Provider>
  );
}

export default App;
