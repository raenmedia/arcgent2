import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogArticle from './pages/BlogArticle';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-slate-50 overflow-x-hidden selection:bg-brand-200 selection:text-brand-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;