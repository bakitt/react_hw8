import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Col = ({ users: usersProp }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Col</h1>
      {users.map(user => (
        <Link to={`/detail/${user.id}`} key={user.id}>
          <div>
            <h2>{user.title}</h2>
            <p>{user.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Col;
