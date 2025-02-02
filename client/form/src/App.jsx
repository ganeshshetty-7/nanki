import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Import Link along with Routes and Route
import Login from './login';  // Corrected import path

const App = () => {
  return (
    <div>
      {/* Navigation Link */}
      <nav>
        <ul>
          <li>
            <Link to="/login">Go to Login</Link>  {/* Link to /login */}
          </li>
          <li>
            <Link to="/signup">Go to Signup</Link>  {/* Link to /login */}
          </li>
        </ul>
      </nav>

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />  {/* Home page route */}
        <Route path="/login" element={<Login />} />      {/* Login page route */}
      </Routes>
    </div>
  );
};

export default App;
