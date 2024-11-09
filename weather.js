const apiKey = '0dbd93cc64605428df9ce8a93832fbbe';
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const errorDisplay = document.getElementById('error');
const weatherDisplay = document.getElementById('weather-display');
const locationDisplay = document.getElementById('location');
const temperatureDisplay = document.getElementById('temperature');
const descriptionDisplay = document.getElementById('description');
const iconDisplay = document.getElementById('icon');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  errorDisplay.textContent = '';
  weatherDisplay.classList.add('hidden');

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = response.data;

    locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionDisplay.textContent = data.weather[0].main;
    iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconDisplay.alt = data.weather[0].description;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    windDisplay.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherDisplay.classList.remove('hidden');
  } catch (error) {
    errorDisplay.textContent = 'City not found';
  }
});
