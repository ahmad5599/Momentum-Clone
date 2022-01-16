const API_KEY = "75060d06cdace92b4992bd135d4176c6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather_span = document.querySelector("#weather span:nth-child(1)");
      const city_span = document.querySelector("#weather span:nth-child(2)");

      weather_span.innerText = `${data.main.temp}° ${data.weather[0].main}\n `;
      city_span.innerText = `${data.name}`;
    });
}
function onGeoError() {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
