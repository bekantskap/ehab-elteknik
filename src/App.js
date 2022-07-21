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
  const [manualTitle, setManualTitle] = useState('');
  const [manualDesc, setManualDesc] = useState([
    {
      desc: 'Denna kvalitetsmanual riktar sig främst till EHABs kunder och medarbetare och är utformad med bakgrund och ledning av SS EN ISO 9001:2000. Det huvudsakliga syftet är att redogöra för EHABs riktlinjer och värderingar som styr företagets verksamhet.',
    },
  ]);

  const [showDesc, setShowDesc] = useState({
    desc1: true,
    desc2: false,
    desc3: false,
    desc4: false,
  });

  const providerValue = React.useMemo(
    () => ({
      darkMode,
      setDarkMode,
      manualDesc,
      setManualDesc,
      manualTitle,
      setManualTitle,
      showDesc,
      setShowDesc,
    }),
    [
      darkMode,
      setDarkMode,
      manualDesc,
      setManualDesc,
      manualTitle,
      setManualTitle,
      showDesc,
      setShowDesc,
    ]
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
