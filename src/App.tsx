import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MathPage from './pages/MathPage';
import SciencePage from './pages/SciencePage';
import ReadingPage from './pages/ReadingPage';
import SocialStudiesPage from './pages/SocialStudiesPage';
import ScienceCornerPage from './pages/ScienceCornerPage';
import CodingZonePage from './pages/CodingZonePage';
import ResourcesPage from './pages/ResourcesPage';
import ProgressPage from './pages/ProgressPage';
import HistoryHeroesPage from './pages/HistoryHeroesPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/math" element={<MathPage />} />
              <Route path="/science" element={<SciencePage />} />
              <Route path="/reading" element={<ReadingPage />} />
              <Route path="/social-studies" element={<SocialStudiesPage />} />
              <Route path="/science-corner" element={<ScienceCornerPage />} />
              <Route path="/coding-zone" element={<CodingZonePage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/history-heroes" element={<HistoryHeroesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;