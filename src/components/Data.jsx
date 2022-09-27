import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { weatherContex } from "./contex/weathercontex";
import "./Home.css";
import TempChart from "./TempChart";
const Data = () => {
  const key = "48335486333d16d54ca72fa5c4fac8bd";
  // const key ="03936904d1df52ae3746c1abb870a144";
  // const key="eae36450b309591aecc5d13a5d0dc169"
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [single, setSingle] = useState({});
  const [sevendayData, setSevenDayData] = useState([]);
  const [show, setShow] = useState(false);
  const [singleday, setSingleday] = useState({});
  const [hours, setHours] = useState([]);
  const { dailydata, setDailydata } = useContext(weatherContex);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    getsevendaysdata(latitude, longitude);
  }, [latitude, longitude]);

  const getsevendaysdata = async (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely&appid=${key}&units=metric`
      )
      .then((res) => {
        console.log("res.l.l.l", res.data.hourly);
        setSevenDayData(res.data.daily);
        setDailydata(res.data.daily);
        
        setHours(res.data.hourly);
        setSingle(res.data.daily[0]);
      })
      .catch((e) => {
        console.log("err...", e);
      });
  };
  const handleClick = (d) => {
    setSingleday(d);
    setShow(true);
  };

  return (
    <div>
      <div className="sevenDatadiv">
        {sevendayData.length !== 0 &&
          sevendayData.map((e, index) => {
            let a = e.dt;
            let date = new Date(a * 1000);
            let refreh = date.toUTCString();
            let arr = refreh.split(",");
            // setSingledayChart(e);
            return (
              <div
                key={index}
                className="DailyForecastDiv"
                onClick={() => handleClick(e)}
              >
                <p className="p1">{arr[0]}</p>
                <div>
                  <span>{e.temp.max.toFixed(0) + " °"}</span>
                  <span>{e.temp.min.toFixed(0) + " °"}</span>
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                  alt={e.weather[0].main}
                />
                <p className="p1">{e.weather[0].main}</p>
              </div>
            );
          })}
      </div>
      {show ? (
        <div className="tempchartdiv">
          {" "}
          <TempChart singledaychart={singleday} hours={hours} />
        </div>
      ) : (
       <TempChart singledaychart={single} hours={hours} />
      )}
    </div>
  );
};

export default Data;
