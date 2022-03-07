'use strict';

window.addEventListener('load', () => {
    let long;
    let lat;
    const token = config.myapiToken;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${token}&units=metric`;

      axios.get(base)
        .then((response) => {
        let celcius = Math.round(parseFloat(response.data.main.temp));
        let feelsLike = Math.round(parseFloat(response.data.main.feels_like));
        let windSpeed = Math.round(parseFloat(response.data.wind.speed * 3.6));
        let windGust = Math.round(parseFloat(response.data.wind.gust * 3.6));
        if (isNaN(windGust)) {
          document.querySelector('#windGust').innerHTML = 'Wind Gust: No Current Data!';
        } else {
          document.querySelector('#windGust').innerHTML = `Wind Gust: ${windGust} km/h`;
        }
        let humid = response.data.main.humidity;
        const iconImg = document.querySelector('#weatherIcon');
        let weatherIcon = response.data.weather[0].icon;
        const iconUrl = `icons/${weatherIcon}.svg`;

        document.querySelector('#description').innerHTML = `${response.data.weather[0].description}`;
        document.querySelector('#temp').innerHTML = `${celcius}&deg;C`;
        document.querySelector('#feelsLike').innerHTML = `Feels Like ${feelsLike}&deg;C`;
        document.querySelector('#location').innerHTML = `Location: ${response.data.name}`;
        document.querySelector('#wind').innerHTML = `Wind: ${windSpeed} km/h`;
        document.querySelector('#humidity').innerHTML = `Humidity: ${humid}%`;
        iconImg.src = iconUrl;
      })
      .catch((error) => console.log('error', error));
    })
  }
});    