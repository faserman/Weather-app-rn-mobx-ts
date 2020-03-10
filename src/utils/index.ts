
class Utils {
  getWeatherDescription(weatherDescription) {
    let urlWeatherIcon = "";
    switch (weatherDescription) {
      case "broken clouds":
        urlWeatherIcon = "https://img.icons8.com/color/96/000000/clouds.png";
        break;
      case "dust":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/dry.png"
        break;
      case "few clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/partly-cloudy-day.png" 
        break;
      case "light rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-rain.png"
        break;
      case "moderate rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-rain.png"
        break;
      case "light snow":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-snow.png"
        break;
      case "overcast clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/clouds.png"
        break;
      case "proximity shower rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/heavy-rain.png"
        break;
        case "light shower snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/sleet.png"
        break;
        case "snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/snow.png"
        break;
        case "shower snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/snow-storm.png"
        break;
      case "scattered clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/clouds.png"
        break;
      case "clear sky":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/summer.png"
        break;
      case "thunderstorm":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/storm.png"
        break;
      case "light intensity drizzle":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/sleet.png"
        break;
      case "fog":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/fog-day.png"
        break;
      default: urlWeatherIcon="https://img.icons8.com/color/96/000000/summer.png";
    }
    return urlWeatherIcon
  };
};

export const utils = new Utils();
