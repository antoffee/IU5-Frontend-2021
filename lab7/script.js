const weather_url = new URL("https://api.openweathermap.org/data/2.5/weather");
const forecast_url = new URL(
  "https://api.openweathermap.org/data/2.5/forecast"
);
const weather_params = {
  q: "Москва",
  units: "metric",
  lang: "ru",
  appid: "fa0cc65a38ebbb9b2e9708775a5d88f6",
};
const forecast_params = {
  q: "Москва",
  units: "metric",
  lang: "ru",
  appid: "fa0cc65a38ebbb9b2e9708775a5d88f6",
  cnt: 3,
};
function temperature(num) {
  return num > 0 ? `+${Math.round(num)}` : `${Math.round(num)}`;
}

function AddUrlParams(url, params) {
  Object.entries(params).forEach(([key, val]) => {
    url.searchParams.append(key, val);
  });
}
async function GetData(url) {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data);
}
function ShowErr() {
  document.getElementById("city").innerHTML = "NOT FOUND";
  document.getElementsByClassName(
    "weather-container"
  )[0].style.backgroundImage = "url('img/error.jpg')";
}
function FillWeather(data) {
  ChangeWeatherBackground(data.weather[0].icon);
  document.getElementById("city").innerHTML = `${data.name}`;
  document.getElementById("temperature").innerHTML =
    temperature(data.main.temp) + "℃";
  document.getElementById(
    "discription"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"} />`;
  document.getElementById(
    "discription"
  ).innerHTML += `${data.weather[0].description}`;
  document.getElementById("wind").innerHTML = `${data.wind.speed} м/с`;
  document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
  document.getElementById("pressure").innerHTML = `${Math.round(
    data.main.pressure / 1.33322
  )} мм рт. ст.`;
}

function FillForecast(data) {
  for (let i = 0; i < data.list.length; i++) {
    document.getElementsByClassName("date")[i].innerHTML = data.list[i].dt_txt;
    document.getElementsByClassName("forecast-temp")[i].innerHTML = temperature(
      data.list[i].main.temp
    );
    document.getElementsByClassName("forecast-temp")[
      i
    ].innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"} />`;
  }
}
function ChangeWeatherBackground(str) {
  switch (str.slice(0, 2)) {
    case "01":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/sunny.jpg')";
      break;
    case "02":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/partially_cloudy.jpg')";
      break;
    case "03":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/cloudy.jpeg')";
      break;
    case "04":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/mainly_cloudy.jpeg')";
      break;
    case "09":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/more_rain.jpg')";
      break;
    case "10":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/rain.jpg')";
      break;
    case "11":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/thunder.jpg')";
      break;
    case "13":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/snow.jpg')";
      break;
    case "50":
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/mist.jpg')";
      break;
    default:
      document.getElementsByClassName(
        "weather-container"
      )[0].style.backgroundImage = "url('img/mist.jpg')";
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  AddUrlParams(weather_url, weather_params);
  AddUrlParams(forecast_url, forecast_params);
  GetData(weather_url).then((data) => {
    FillWeather(data);
  });
  GetData(forecast_url)
    .then((data) => {
      FillForecast(data);
    })
    .catch((err) => {
      ShowErr();
    });
});

document.getElementById("search-btn").addEventListener("click", () => {
  let city = document.getElementById("search-box").value;

  weather_url.searchParams.delete("q");
  weather_url.searchParams.append("q", city);
  forecast_url.searchParams.delete("q");
  forecast_url.searchParams.append("q", city);
  GetData(weather_url)
    .then((data) => {
      FillWeather(data);
    })
    .catch((err) => {
      ShowErr(err);
      return;
    });
  GetData(forecast_url).then((data) => {
    FillForecast(data);
  });
});
