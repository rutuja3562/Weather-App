import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import TempChart from "./TempChart";
// `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,current,minutely,hourly&appid=54500e28f271928041c9626e4ffd9d17&units=metric&units=metric`
// `https://api.openweathermap.org/data/2.5/forecast?lat=&lon=79.0882&appid=48335486333d16d54ca72fa5c4fac8bd&units=metric`
// `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=54500e28f271928041c9626e4ffd9d17&exclude=alerts,current,minutely,hourly&units=metric`

const SevenDaysdata = ({ latitude, longitude }) => {
  console.log("latlon", latitude, longitude);
  const key = "48335486333d16d54ca72fa5c4fac8bd";
  // const key="03936904d1df52ae3746c1abb870a144";
  // const key="eae36450b309591aecc5d13a5d0dc169"
  const [sevendata, setSevendata] = useState([]);
  const [show, setShow] = useState(false);
  const [singledaychart, setSingledaychart] = useState({});
  const [singleday,setSingleday]=useState({})
  const [hour,setHour]=useState([])
  useEffect(() => {
    if (latitude !== "" && longitude !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,current,minutely&appid=${key}&units=metric`
        )
        .then((data) => {
          // console.log("......sevendata.....", data.data);
          setSevendata(data.data.daily);
          setHour(data.data.hourly);
          setSingleday(data.data.daily[0])
        })
        .catch((e) => {
          console.log("..error..", e);
        });
    }
  }, [latitude, longitude]);
  const handleClick = (d) => {
    setSingledaychart(d)
    setShow(true);
  };
  return (
    <div>
      <div className="sevenDatadiv">
        {
          // sevendata.length !== 0 &&
          sevendata.map((e, index) => {
            let a = e.dt;
            let date = new Date(a * 1000);
            let refreh = date.toUTCString();
            let arr = refreh.split(",");
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
          })
        }
      </div>
      {show ? (
        <div className="tempchartdiv">
         
          <TempChart singledaychart={singledaychart} hours={hour}/>
        </div>
      ) : <TempChart singledaychart={singleday} hours={hour}/>}
    </div>
  );
};

export default SevenDaysdata;
