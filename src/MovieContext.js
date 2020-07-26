import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovie] = useState([
    {
      name: "HarryPotter",
      price: "$10",
      id: 123,
    },
    {
      name: "Game of thrones",
      price: "$12",
      id: 345,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
