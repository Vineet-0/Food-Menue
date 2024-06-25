import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import User from './user'; // Make sure the component name is capitalized

const App = () => {
  return (
    <Router>
      <div>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;