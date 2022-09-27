import React, { useContext } from "react";
import { weatherContex } from "./contex/weathercontex";
import "./Home.css";
import Temperature from "./Temperature";
const TempChart = ({ singledaychart, hours }) => {
  // console.log("props", hours );
  let sunri = singledaychart.sunrise;
  let rise = new Date(sunri * 1000).toTimeString().split(":");
  let sunse = singledaychart.sunset;
  let set = new Date(sunse * 1000).toTimeString().split(":");
  return (
    <div className="tempchartdiv">
      <div className="temp-div">
        <h1>{singledaychart?.temp?.max?.toFixed(0) + "°C"}</h1>
      </div>
      <div>
        <Temperature hours={hours} />
      </div>
      <div className="pressure-div">
        <div>
          <p className="p1">Pressure</p>
          <p className="p2">{singledaychart.pressure} hpa</p>
        </div>
        <div>
          <p className="p1">Humidity</p>
          <p className="p2">{singledaychart.humidity}%</p>
        </div>
      </div>
      <div className="sunrise-div">
        <div>
          <p className="p1">Sunrise</p>
          <p className="p2">{`${rise[0]}:${rise[1]} am`}</p>
        </div>
        <div>
          <p className="p1">Sunset</p>
          <p className="p2">{`${Number(set[0]) - 12}:${set[1]} pm`}</p>
        </div>
      </div>
    </div>
  );
};

export default TempChart;
