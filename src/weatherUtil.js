// const wmoWeatherCode = new Map();
// wmoWeatherCode.set(0, "Clear Sky");
// wmoWeatherCode.set(1, "Mainly Clear");
// wmoWeatherCode.set(2, "Partly Cloudy");
// wmoWeatherCode.set(3, "Overcast");
// wmoWeatherCode.set(45, "Fog");
// wmoWeatherCode.set(48, "Depositing Rime Fog");
// wmoWeatherCode.set(51, "Drizzle: Light");
// wmoWeatherCode.set(53, "Drizzle: Moderate");
// wmoWeatherCode.set(55, "Drizzle: Heavy");
// wmoWeatherCode.set(56, "Freezing Drizzle: Light");
// wmoWeatherCode.set(57, "Freezing Drizzle: Heavy");
// wmoWeatherCode.set(61, "Rain: Light");
// wmoWeatherCode.set(63, "Rain: Moderate");
// wmoWeatherCode.set(65, "Rain: Heavy");
// wmoWeatherCode.set(66, "Freezing Rain: Light");
// wmoWeatherCode.set(67, "Freezing Rain: Heavy");
// wmoWeatherCode.set(71, "Snow: Light");
// wmoWeatherCode.set(73, "Snow: Moderate");
// wmoWeatherCode.set(75, "Snow: Heavy");
// wmoWeatherCode.set(77, "Snow Grains");
// wmoWeatherCode.set(80, "Rain Showers: Light");
// wmoWeatherCode.set(81, "Rain Showers: Moderate");
// wmoWeatherCode.set(82, "Rain Showers: Heavy");
// wmoWeatherCode.set(85, "Snow Showers: Light");
// wmoWeatherCode.set(86, "Snow Showers: Heavy");
// wmoWeatherCode.set(95, "Thunderstorm");
// wmoWeatherCode.set(96, "Thunderstorm with Hail");

// const convertToFahrenheit = (celsiusTemp) =>
//   ((celsiusTemp * 9) / 5 + 32).toFixed(1);

// const getWeatherTypeFromCode = (code) => wmoWeatherCode.get(code);

// export { convertToFahrenheit, getWeatherTypeFromCode };

const wmoWeatherCode = new Map();
wmoWeatherCode.set(0, "Clear Sky");
wmoWeatherCode.set(1, "Mainly Clear");
wmoWeatherCode.set(2, "Partly Cloudy");
wmoWeatherCode.set(3, "Overcast");
wmoWeatherCode.set(45, "Fog");
wmoWeatherCode.set(48, "Depositing Rime Fog");
wmoWeatherCode.set(51, "Drizzle: Light");
wmoWeatherCode.set(53, "Drizzle: Moderate");
wmoWeatherCode.set(55, "Drizzle: Heavy");
wmoWeatherCode.set(56, "Freezing Drizzle: Light");
wmoWeatherCode.set(57, "Freezing Drizzle: Heavy");
wmoWeatherCode.set(61, "Rain: Light");
wmoWeatherCode.set(63, "Rain: Moderate");
wmoWeatherCode.set(65, "Rain: Heavy");
wmoWeatherCode.set(66, "Freezing Rain: Light");
wmoWeatherCode.set(67, "Freezing Rain: Heavy");
wmoWeatherCode.set(71, "Snow: Light");
wmoWeatherCode.set(73, "Snow: Moderate");
wmoWeatherCode.set(75, "Snow: Heavy");
wmoWeatherCode.set(77, "Snow Grains");
wmoWeatherCode.set(80, "Rain Showers: Light");
wmoWeatherCode.set(81, "Rain Showers: Moderate");
wmoWeatherCode.set(82, "Rain Showers: Heavy");
wmoWeatherCode.set(85, "Snow Showers: Light");
wmoWeatherCode.set(86, "Snow Showers: Heavy");
wmoWeatherCode.set(95, "Thunderstorm");
wmoWeatherCode.set(96, "Thunderstorm with Hail");

const weatherEmojis = new Map([
  [0, "☀️"],
  [1, "🌤️"],
  [2, "⛅"],
  [3, "☁️"],
  [45, "🌫️"],
  [48, "🌁"],
  [51, "🌦️"],
  [53, "🌧️"],
  [55, "🌧️"],
  [56, "🌧️❄️"],
  [57, "🌧️❄️"],
  [61, "🌦️"],
  [63, "🌧️"],
  [65, "🌧️"],
  [66, "🌧️❄️"],
  [67, "🌧️❄️"],
  [71, "🌨️"],
  [73, "🌨️"],
  [75, "❄️"],
  [77, "🌨️"],
  [80, "🌦️"],
  [81, "🌧️"],
  [82, "🌧️"],
  [85, "🌨️"],
  [86, "🌨️"],
  [95, "🌩️"],
  [96, "⛈️"]
]);

const convertToFahrenheit = (celsiusTemp) =>
  ((celsiusTemp * 9) / 5 + 32).toFixed(1);

const getWeatherTypeFromCode = (code) => wmoWeatherCode.get(code);
const getWeatherEmoji = (code) => weatherEmojis.get(code) || "❔";

export { convertToFahrenheit, getWeatherTypeFromCode, getWeatherEmoji };
