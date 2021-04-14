// dynamic weather
const currentWeather = document.querySelector(".current-weather");
fetch("https://api.weatherapi.com/v1/current.json?key=98e270f30e9243299f7184227211404&q=Baku&aqi=no")
  .then(res => res.json())
  .then(data => currentWeather.querySelector("span").textContent = data.current.temp_c);

// adding animation for the load event of document
window.addEventListener("load", () => {
  document.querySelectorAll("header section").forEach(section => section.classList.add("animated"));
  document.querySelector(".left-side-msg").classList.add("animated");
  document.querySelector(".right-side-msg").classList.add("animated");
})