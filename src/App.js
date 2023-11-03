import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get('http://localhost:3001/sites');

        // Set the retrieved data in the state
        setSites(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
// async function getAllSites() {
//   try {
//     const response = await axios.get('localhost:3001/sites');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Site Data</h1>
          <ul>
            {sites.map((site) => (
                <li key={site._id}>{site.siteName}{site.siteID}</li>

            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
