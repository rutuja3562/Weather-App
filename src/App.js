import "./App.css";
import Data from "./components/Data";
import TempChart from "./components/TempChart";
// import Home from "./components/Home";
// import SevenDaysdata from "./components/SevenDaysdata";
import WheatherHome from "./components/WheatherHome";
// 7ef57457ac4de9dd9e3aec910c118980
function App() {
  return (
    <div className="App">
      <div className="appdiv">
        <WheatherHome />
        {/*
      <TempChart/>
      <Data />
       */}
      </div>
    </div>
  );
}

export default App;
