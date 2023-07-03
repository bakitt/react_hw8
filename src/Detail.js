import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'


const Detail = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(({ data }) => setData(data))
  }, [])
  
  return (
    <div>
      <h1>Detail</h1>
      {
        <div>
          <h1>{data.name}</h1>
          <h2>{data.email}</h2>
          <button onClick={() => navigate(-1)}>go back</button>
        </div>
      }
    </div>
  );
}

export default Detail;
