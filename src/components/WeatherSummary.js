import { convertToFahrenheit, getWeatherTypeFromCode, getWeatherEmoji } from "../weatherUtil";

const WeatherSummary = ({
  currentWeather: { temperature, weatherCode },
  isCelsius,
}) => {
  return (
    <div>
      <h1 className="weather-summary">
        <span className="weather-icon">{getWeatherEmoji(weatherCode)}</span>
        {isCelsius
          ? `${temperature} ºC`
          : `${convertToFahrenheit(temperature)} ºF`}{" "}
        | {getWeatherTypeFromCode(weatherCode)}
      </h1>
    </div>
  );
};

export default WeatherSummary;
