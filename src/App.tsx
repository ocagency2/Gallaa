import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Credit from './pages/Credit';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AppContent() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== previousPath) {
      setShowLoader(true);
      setPreviousPath(location.pathname);

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, previousPath]);

  return (
    <>
      {showLoader && <PageLoader />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;