// DataComponent.js

import React, { useState, useEffect } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map((item,index) => (
          <li key={index}>{item.name}</li>
          // Replace 'yourField' with the actual field you want to display
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;