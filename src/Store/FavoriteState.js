
import React, { createContext, useState } from 'react';

// Create the context
export const FavoriteContext = createContext();

// Create the store component
export const FavoriteStore = ({ children }) => {
  const [data, setData] = useState([]);

  // Define any methods or functions to manipulate the data array

  // Provide the data and methods to the children components
  return (
    <FavoriteContext.Provider value={{ data , setData }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteStore ;
