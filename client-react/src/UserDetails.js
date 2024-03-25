// UserDetails.js
import React from 'react';

function UserDetails({ users }) {
  return (
    <div>
      <h1>Frontend Part II - User Details</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
          <p>Email: {user.email}</p>
          <p>Occupation: {user.occupation}</p>
          <p>Hobbies: {user.hobbies.join(', ')}</p>
          <p>IsActive: {user.isActive ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;
