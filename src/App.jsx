import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useGoalStore } from './store/goalStore.jsx';
import { ThemeContextProvider, useTheme } from './context/ThemeContext.jsx';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import FormPage from './pages/FormPage.jsx';
import InProgressPage from './pages/InProgressPage.jsx';
import CompletedPage from './pages/CompletedPage.jsx';
import NotStartedPage from './pages/NotStartedPage.jsx';
import EditGoalForm from './components/EditGoalForm.jsx';

function AppContent() {
  const { goals, setGoals } = useGoalStore();
  const { dark } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (loggedIn && username) {
      const stored = localStorage.getItem(`goals_${username.toLowerCase()}`);
      if (stored) setGoals(JSON.parse(stored));
    }
  }, [loggedIn, username]);

  useEffect(() => {
    if (loggedIn && username) {
      localStorage.setItem(`goals_${username.toLowerCase()}`, JSON.stringify(goals));
    }
  }, [goals, loggedIn, username]);

  if (!loggedIn) {
    return <Login onLogin={(name) => { setUsername(name); setLoggedIn(true); }} />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row px-4 py-6 md:px-8 md:py-8 gap-6 transition-colors duration-500 bg-gradient-to-br from-white to-gray-100 dark:from-elfonze-base dark:to-black text-gray-900 dark:text-elfonze-soft">
      <Sidebar username={username} />
      <main className="flex-1 flex items-center justify-center min-h-screen md:min-h-0">
        <div className="w-full max-w-5xl space-y-6 backdrop-blur-xl animate-fade-in">
          <EditGoalForm />
          <Routes>
            <Route path="/" element={<Navigate to="/form" />} />
            <Route path="/form" element={<FormPage username={username} />} />
            <Route path="/in-progress" element={<InProgressPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/not-started" element={<NotStartedPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
