const API_KEY = "e6677c5a43e02e99e82d1bf6cc21593a"; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", function() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      weatherInfo.style.display = "block";
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p><b>Description:</b> ${data.weather[0].description}</p>
        <p><b>Temperature:</b> ${data.main.temp}°C</p>
        <p><b>Feels like:</b> ${data.main.feels_like}°C</p>
        <p><b>Humidity:</b> ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      console.error(error);
      weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
    });
});
