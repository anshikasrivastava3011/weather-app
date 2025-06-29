import { useEffect, useState } from "react";
import WeatherSummary from "../components/WeatherSummary";
import {
  convertToFahrenheit,
  getWeatherEmoji,
  getWeatherTypeFromCode,
} from "../weatherUtil";
import getWeather from "../api/weatherApi";

const fetchCoordinates = (callback) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      callback(latitude, longitude);
    },
    (err) => {
      console.error(err);
      // fallback to Delhi
      callback(28.6139, 77.2090);
    }
  );
};

const getWeatherCardClass = (code) => {
  if ([0, 1].includes(code)) return "clear";
  if ([2, 3, 45, 48].includes(code)) return "cloudy";
  if ([61, 63, 65, 80, 81, 82, 51, 53, 55].includes(code)) return "rain";
  if ([95, 96].includes(code)) return "thunder";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  return "";
};

const WeatherPage = () => {
  const [todayWeather, setTodayWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchCoordinates(async (latitude, longitude) => {
      const weatherInfo = await getWeather({ latitude, longitude });
      convertToStateVariable(weatherInfo);
    });
  }, []);

  const convertToStateVariable = (tempWeekWeather) => {
    const fetchedWeatherInfo = tempWeekWeather.daily.time.map((time, i) => ({
      date: new Date(time),
      maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
      minTemperature: tempWeekWeather.daily.temperature_2m_min[i],
      weatherCode: tempWeekWeather.daily.weathercode[i],
    }));
    setWeekWeather(fetchedWeatherInfo);

    let currentWeather = tempWeekWeather.current_weather;
    currentWeather.time = new Date(currentWeather.time);
    currentWeather.isDay = currentWeather.is_day === 1;
    currentWeather.weatherCode = currentWeather.weathercode;
    delete currentWeather.is_day;
    delete currentWeather.weathercode;
    setTodayWeather(currentWeather);
  };

  if (!weekWeather.length) return <p>Loading...</p>;

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Dark Mode"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      <button
        className="ui icon button"
        onClick={() => setIsCelsius(!isCelsius)}
      >
        {isCelsius ? "ºF" : "ºC"}
      </button>

      <h1 className="my-heading">Weather</h1>

      <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius} />

      <div className="weather-grid">
        {weekWeather.map((weather) => (
          <div
            className={`weather-card ${getWeatherCardClass(
              weather.weatherCode
            )}`}
            key={weather.date}
          >
            <div className="date">{weather.date.toDateString()}</div>
            <div className="temp">
              H:{" "}
              {isCelsius
                ? `${weather.maxTemperature} ºC`
                : `${convertToFahrenheit(weather.maxTemperature)} ºF`}
              <br />
              L:{" "}
              {isCelsius
                ? `${weather.minTemperature} ºC`
                : `${convertToFahrenheit(weather.minTemperature)} ºF`}
            </div>
            <div className="type">
              <span className="weather-icon">
                {getWeatherEmoji(weather.weatherCode)}
              </span>
              {getWeatherTypeFromCode(weather.weatherCode)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherPage;
