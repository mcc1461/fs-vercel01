import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserDetails from './UserDetails'; // Import the UserDetails component

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://backend-kappa-lilac-24.vercel.app/api')
      .then(response => {
        console.log('Data fetched:', response.data);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Component for PART I content
  const PartIContent = () => (
    <>
      <h1>Welcome to FRONTEND PART-I</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p className='name'>Name: <strong> <span className='username'> {user.name} </span>  </strong></p>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
          <hr />
        </div>
      ))}
    </>
  );

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Frontend Part-II</Link>
            </li>
            <li>
              <a href="https://backend-kappa-lilac-24.vercel.app/">Main Server Page</a>
            </li>
            <li>
              <a href="https://backend-kappa-lilac-24.vercel.app/api">Server API Page</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PartIContent />} />
          <Route path="/details" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
