import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Wrapper = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => setUsers(data))
  }, [])
  return (
    <div>
      {
        React.cloneElement(children, { users, setUsers })
      }
    </div>
  );
}

export default Wrapper;
