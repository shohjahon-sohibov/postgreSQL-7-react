import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [ data, setdata ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/', {
      mode:'no-cors',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": 'http://localhost:9000',
        'Access-Control-Allow-Credentials':'true'
      }
    })
    .then(res => res.json())
    .then(data => setdata(data))
  }, [data])
  
  return (
    <>
    <h1>hello</h1>

    <form method='post' action='/post' encType='application/x-www-form-urlencoded'>
    <input type="search" name="search" placeholder="search..."/>
    <button type='submit'>Send</button>
    </form>


    <ul>
      {
        data && data.map((e, i) => {
          <li key={i}>
            <h3>{e.employee_name}</h3>
            <p>{e.employee_age}</p>
            <p>{e.employee_phone}</p>
          </li>
        })
      }
    </ul>

    </>
  );
}

export default App;
