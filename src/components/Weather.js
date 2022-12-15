import React, { useState, useEffect } from "react";
import Days from "./Days";
import axios from "axios";

function Weather() {
  const [option, setOption] = useState("denizli");

  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${option}&units=metric&appid=b2d6ba9c81dc2eefa64c2e2586f617c7`
    )
      .then((res) => res.data)
      .then((result) => setWeather(result))
      .catch((e) => console.log(e));
  }, [option]);

  console.log({ weather });

  return (
    <div className="days">
      <div className="day today">
        <select name="" id="" onChange={handleChange}>
          <option value="İstanbul">İstanbul</option>
          <option value="Denizli">Denizli</option>
          <option value="Ankara">Ankara</option>
        </select>

        <br />
        <br />
        <div>
          <p>
            <Days />
          </p>

          {/* icon */}
          {typeof weather.list !== "undefined" ? (
            <img
              src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              alt="icon"
            />
          ) : (
            ""
          )}

          {/* temp */}
          {typeof weather.list !== "undefined" ? (
            <p className="temp">{weather.list[0].main.temp} °C </p>
          ) : (
            ""
          )}
          <br />

          {/* temp_max-min */}
          {typeof weather.list !== "undefined" ? (
            <p>
              {weather.list[0].main.temp_max} °C /{" "}
              {weather.list[0].main.temp_min} °C
            </p>
          ) : (
            ""
          )}
          <br />

          {/* {name} */}

          {typeof weather.city !== "undefined" ? (
            <p>{weather.city.name}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="day">
        <select name="" id="" onChange={handleChange}>
          <option value="İstanbul">İstanbul</option>
          <option value="Denizli">Denizli</option>
          <option value="Ankara">Ankara</option>
        </select>

        <br />
        <br />
        <div>
          <p>
            <Days />
          </p>

          {/* icon */}
          {typeof weather.list !== "undefined" ? (
            <img
              src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              alt="icon"
            />
          ) : (
            ""
          )}

          {/* temp */}
          {typeof weather.list !== "undefined" ? (
            <p className="temp">{weather.list[0].main.temp} °C </p>
          ) : (
            ""
          )}
          <br />

          {/* temp_max-min */}
          {typeof weather.list !== "undefined" ? (
            <p>
              {weather.list[0].main.temp_max} °C /{" "}
              {weather.list[0].main.temp_min} °C
            </p>
          ) : (
            ""
          )}
          <br />

          {/* {name} */}

          {typeof weather.city !== "undefined" ? (
            <p>{weather.city.name}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
