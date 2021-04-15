// dynamic weather
const currentWeather = document.querySelector(".current-weather");
fetch("https://api.weatherapi.com/v1/current.json?key=98e270f30e9243299f7184227211404&q=Baku&aqi=no")
  .then(res => res.json())
  .then(data => currentWeather.querySelector("span").textContent = data.current.temp_c);

// dynamic year
const currentYear = document.querySelector(".current-year");
currentYear.textContent = ` ${new Date().getFullYear()} `;