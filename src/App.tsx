import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Goals from './components/Goals';

const App:React.FC = () => {
  return (
    <Router>
      <div className="flex bg-blue-50 h-screen">
        <Sidebar />
        <div className="flex-1 p-6 ml-64 md:ml-0">
          <Routes>
            {/* <Route path="/" element={<h1 className="text-3xl">Dashboard</h1>} /> */}
            <Route path="/goals" element={<Goals />} />
            {/* <Route path="/progress" element={<h1 className="text-3xl">Progress</h1>} /> */}
            {/* <Route path="/settings" element={<h1 className="text-3xl">Settings</h1>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;