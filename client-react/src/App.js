import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

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
    <div className="App">
      <h1>Welcome to FRONTEND PART II</h1>
      {/* Display the fetched data */}
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
