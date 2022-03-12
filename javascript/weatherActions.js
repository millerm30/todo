'use strict';

window.addEventListener('load', () => {
    let long;
    let lat;
    const token = config.myapiToken;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${token}&units=metric`;

      axios.get(base)
        .then((response) => {
        const celcius = Math.round(parseFloat(response.data.main.temp));
        const feelsLike = Math.round(parseFloat(response.data.main.feels_like));
        const windSpeed = Math.round(parseFloat(response.data.wind.speed * 3.6));
        if (response.data.wind.gust) {
          const windGust = Math.round(parseFloat(response.data.wind.gust * 3.6));
          document.querySelector('#windGust').innerHTML = `Wind Gust: ${windGust} km/h`;
          } else {
          document.querySelector('#windGust').hidden = true;
        }
        if (response.data.snow) {
          const snowFall = response.data.snow['1h'] / 10;
          if (snowFall <= 1) {
            document.querySelector("#snowFall").innerHTML = `Snow Fall: < 1cm`;
          } else if (snowFall > 1) {
            document.querySelector("#snowFall").innerHTML = `Snow Fall: ${snowFall}cm`;
          } else {
            document.querySelector("#snowFall").hidden = true;
          }
        }
        if (response.data.rain) {
          const rainFall = response.data.rain['1h'];
          document.querySelector('#rainFall').innerHTML = `Rain Fall: ${rainFall}`;
        } else {
          document.querySelector('#rainFall').hidden = true;
        }
        const sunRise = response.data.sys.sunrise;
        const riseTime = new Date(sunRise * 1000).toLocaleTimeString();
        const sunSet = response.data.sys.sunset;
        const setTime = new Date(sunSet * 1000).toLocaleTimeString();
        const humid = response.data.main.humidity;
        const iconImg = document.querySelector('#weatherIcon');
        const weatherIcon = response.data.weather[0].icon;
        const iconUrl = `icons/${weatherIcon}.svg`;
        document.querySelector('#description').innerHTML = `${response.data.weather[0].description}`;
        document.querySelector('#temp').innerHTML = `${celcius}&deg;C`;
        document.querySelector('#feelsLike').innerHTML = `Feels Like ${feelsLike}&deg;C`;
        document.querySelector('#location').innerHTML = `Location: ${response.data.name}`;
        document.querySelector('.riseData').innerHTML = `${riseTime}`;
        document.querySelector('.setData').innerHTML = `${setTime}`;
        document.querySelector('#wind').innerHTML = `Wind Speed: ${windSpeed} km/h`;
        document.querySelector('#humidity').innerHTML = `Humidity: ${humid}%`;
        iconImg.src = iconUrl;
      })
      .catch((error) => console.log('error', error));
    })
  }
});    