import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const apikey = "03936904d1df52ae3746c1abb870a144";
  const [input, setInput] = useState("");
  useEffect(() => {
    axios.get();
  }, []);
  return (
    <div>
      <div className="input-div">
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
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <div>
        {/*lat !== "" && lon !== "" && <SevenDaysdata lat={lat} lon={lon} />*/}
      </div>
    </div>
  );
};

// export default Home;
