import React, { useEffect, useState } from "react";
import Data from "./Data";
import { ImLocation } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import "./Home.css";
import axios from "axios";
import SevenDaysdata from "./SevenDaysdata";
const WheatherHome = () => {
    const key = "48335486333d16d54ca72fa5c4fac8bd";
  //   const apikey = "03936904d1df52ae3746c1abb870a144";
  // const apikey = "54500e28f271928041c9626e4ffd9d17";
  // `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=48335486333d16d54ca72fa5c4fac8bd&units=metric`

  // const key="03936904d1df52ae3746c1abb870a144";
  // const key="eae36450b309591aecc5d13a5d0dc169"
  const [input, setInput] = useState("Pune, Maharashtra");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [alldata, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    setShow(!show);
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
          )
        .then((d) => {
          setAllData(d.data);
          setLatitude(d.data.coord.lat);
          setLongitude(d.data.coord.lon);
        })
        .catch((e) => {
          console.log(e);
        });
  };
  return (
    <div>
      <div className="input-div" >
        <div className="input-div1">
          <ImLocation size={22} />
          <input
            type={"text"}
            placeholder=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
            border="transparent"
          ></input>
        </div>
        <div>
          <AiOutlineSearch size={25} onClick={handleSearch} />
        </div>
      </div>
      <div>
        {show ? (
          <Data />
        ) : (
          <SevenDaysdata latitude={latitude} longitude={longitude} />
        )}
      </div>
    </div>
  );
};

export default WheatherHome;
