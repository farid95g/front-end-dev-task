// dynamic weather
const currentWeather = document.querySelector(".current-weather");
fetch("https://api.weatherapi.com/v1/current.json?key=98e270f30e9243299f7184227211404&q=Baku&aqi=no")
  .then(res => res.json())
  .then(data => currentWeather.querySelector("span").textContent = data.current.temp_c);

// dynamic year
const currentYear = document.querySelector(".current-year");
currentYear.textContent = ` ${new Date().getFullYear()} `;

// dynamic date
const currentDate = document.querySelectorAll(".current-date");
let date = new Date();
const now = `${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}.${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}.${date.getFullYear()}`;
currentDate.forEach(span => span.textContent = now);