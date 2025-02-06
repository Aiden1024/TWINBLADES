import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext({
  currUser: "",
  setCurrUser: (user) => {}
});

// Create the provider component
export const DataProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState("");

  // Wrap the children with the provider and pass the state and updater function
  return (
	<DataContext.Provider value={{ currUser, setCurrUser }}>
	  {children}
	</DataContext.Provider>
  );
};