
import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import './../styles/App.css';

const App = () => {
  const [people, setpeople] = useState([])

  const fetchdata = async () => {
    const data = await fetch('https://reqres.in/api/users');
    const response = await data.json();
    console.log(response.data)
    setpeople(response.data);
  };
  // useEffect(() => {
  //   fetchdata();
  // }, [])


  return (
    <div>
      <header className="navbar">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={fetchdata}>Get User List</button>
      </header>
      <table className="tablehead">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {people.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">No Data Found to Display</td>
            </tr>
          ) : (
            people.map((person, index) => (
              <tr key={index}>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.email}</td>
                <td>
                  <img src={person.avatar} alt={`Avatar of ${person.first_name}`} />
                </td>
              </tr>
            ))
          )}
        </tbody>     
      </table>
    </div>
  )
}

export default App
