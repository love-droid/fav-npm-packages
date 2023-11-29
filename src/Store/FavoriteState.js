
import React, { createContext, useState , useEffect } from 'react';

// Create the context
export const FavoriteContext = createContext();

// Create the store component
export const FavoriteStore = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Debug statement to check stored data
    const storedData = localStorage.getItem("data");
    console.log("Stored Data:", storedData);

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  

  // Define any methods or functions to manipulate the data array

  // Provide the data and methods to the children components
  return (
    <FavoriteContext.Provider value={{ data , setData }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteStore ;
