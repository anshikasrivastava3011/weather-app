// import { convertToFahrenheit, getWeatherTypeFromCode } from "../weatherUtil";

// const dateFormatter = new Intl.DateTimeFormat("en-IN", {
//   month: "short",
//   day: "numeric",
//   year: "2-digit",
// });

// const formatDate = (date) => dateFormatter.format(date);

// const WeatherRow = ({
//   weather: { date, maxTemperature, minTemperature, weatherCode },
//   isCelsius,
// }) => {
//   return (
//     <tr>
//       <td>{formatDate(date)}</td>
//       <td>
//         H:{" "}
//         {isCelsius
//           ? `${maxTemperature} ºC`
//           : `${convertToFahrenheit(maxTemperature)} ºF`}{" "}
//         - L:{" "}
//         {isCelsius
//           ? `${minTemperature} ºC`
//           : `${convertToFahrenheit(minTemperature)} ºF`}
//       </td>
//       <td>{getWeatherTypeFromCode(weatherCode)}</td>
//     </tr>
//   );
// };

// export default WeatherRow;

import { convertToFahrenheit, getWeatherTypeFromCode, getWeatherEmoji } from "../weatherUtil";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  day: "numeric",
  year: "2-digit",
});

const formatDate = (date) => dateFormatter.format(date);

const WeatherRow = ({
  weather: { date, maxTemperature, minTemperature, weatherCode },
  isCelsius,
}) => {
  return (
    <tr>
      <td>{formatDate(date)}</td>
      <td>
        H:{" "}
        {isCelsius
          ? `${maxTemperature} ºC`
          : `${convertToFahrenheit(maxTemperature)} ºF`}{" "}
        - L:{" "}
        {isCelsius
          ? `${minTemperature} ºC`
          : `${convertToFahrenheit(minTemperature)} ºF`}
      </td>
      <td>
        <span className="weather-icon">{getWeatherEmoji(weatherCode)}</span>
        {getWeatherTypeFromCode(weatherCode)}
      </td>
    </tr>
  );
};

export default WeatherRow;
