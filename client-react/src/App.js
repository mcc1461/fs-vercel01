import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Routers} from 'react-router-dom';
import UserDetails from './UserDetails';

function App() {
  // State to store the fetched users array
  const [users, setUsers] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get('https://fs-vercel01-server.vercel.app/api')
      .then(response => {
        console.log('Data fetched:', response.data);
        // Assuming the data is in response.data.users
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array means this effect runs once on mount

  return (
    <Router>
    <div className="App">
      <h1>Welcome to FRONTEND PART-I</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">User Details</Link>
          </li>
          <li>
            <a href="https://fs-vercel01-server.vercel.app/">Main Page </a> 
          </li>
          <li>
            <a href="https://fs-vercel01-server.vercel.app/api">API</a>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={
        users.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
          </div>
        ))
      } />
      <Route path="/details" element={<UserDetails users={users} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
