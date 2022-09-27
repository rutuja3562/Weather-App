import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
// import {useNavigate} from "react-router-dom";

export const weatherContex = createContext();

export const WeatherProvider = ({ children }) => {
  const [main, setMain] = useState([]);
  const [longitu,setLongitu] = useState([])
  const [latitu,setLatitu] = useState([])
const [dailydata,setDailydata]=useState([])
  //   const navigate = useNavigate()
  // const histry =useHistry()
  useEffect(() => {}, []);
  return (
    <weatherContex.Provider value={{ main, setMain ,dailydata,setDailydata}}>
      {children}
    </weatherContex.Provider>
  );
};
