import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [option, setOption] = useState("");

  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${option}&units=metric&appid=b2d6ba9c81dc2eefa64c2e2586f617c7`
    )
      .then((res) => res.data)
      .then((result) => console.log(result));
  }

  console.log({ option });
  return (
    <div>
      <select name="" id="" onChange={handleChange}>
        <option value="İstanbul">İstanbul</option>
        <option value="Denizli">Denizli</option>
        <option value="Ankara">Ankara</option>
      </select>

      <br />
      <br />

      <div>
        <p>Mon</p>
        <img src="" alt="icon" />
        <p>temp</p>
        {/* {weather.name != "undefined" ? <p>{weather.name}</p> : ""} */}
      </div>
    </div>
  );
}

export default Weather;
