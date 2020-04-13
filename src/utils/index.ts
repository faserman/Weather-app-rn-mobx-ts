class Utils {
  setWeatherIcon(weatherDescription: string, size: string) {
    let urlWeatherIcon = "";
    switch (weatherDescription) {
      case "broken clouds":
        urlWeatherIcon = `https://img.icons8.com/color/${ size }/000000/clouds.png`;
        break;
      case "dust":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/dry.png`
        break;
      case "few clouds":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/partly-cloudy-day.png` 
        break;
      case "light rain":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/light-rain.png`
        break;
      case "moderate rain":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/light-rain.png`
        break;
      case "light snow":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/light-snow.png`
        break;
      case "overcast clouds":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/clouds.png`
        break;
      case "proximity shower rain":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/heavy-rain.png`
        break;
        case "light shower snow":
          urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/sleet.png`
        break;
        case "snow":
          urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/snow.png`
        break;
        case "shower snow":
          urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/snow-storm.png`
        break;
      case "scattered clouds":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/clouds.png`
        break;
      case "clear sky":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/summer.png`
        break;
      case "thunderstorm":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/storm.png`
        break;
      case "light intensity drizzle":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/sleet.png`
        break;
      case "fog":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/fog-day.png`
        break;
      case "mist":
        urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/fog-day.png`
        break;
      default: urlWeatherIcon=`https://img.icons8.com/color/${ size }/000000/summer.png`;
    }
    return urlWeatherIcon
  };

  setWindDirection(windDeg: number) {
    const windDirection = (windDeg >= 0 && windDeg <= 20) ? "North" :
      (windDeg >= 21 && windDeg <= 70) ? "North-east" :
      (windDeg >= 71 && windDeg <= 110) ? "East" :
      (windDeg >= 111 && windDeg <= 155) ? "South-east" :
      (windDeg >= 156 && windDeg <= 200) ? "South" :
      (windDeg >= 201 && windDeg <= 250) ? "South-west" :
      (windDeg >= 251 && windDeg <= 290) ? "West" :
      (windDeg >= 291 && windDeg <= 340) ? "North-west" :
      (windDeg >= 341 && windDeg <= 360) ? "North" : ""
    return windDirection
  }

  setWindVerbalDesignation(windForce: number) {
    const verbalDesignation = (windForce >= 0 && windForce <= 0.2) ? "Calm wind" :
      (windForce >= 0.3 && windForce <= 1.5) ? "Quiet wind" :
      (windForce >= 1.6 && windForce <= 3.3) ? "Easy wind" :
      (windForce >= 3.4 && windForce <= 5.4) ? "Light wind" :
      (windForce >= 5.5 && windForce <= 7.9) ? "Moderate wind" :
      (windForce >= 8.0 && windForce <= 10.7) ? "Fresh wind" :
      (windForce >= 10.8 && windForce <= 13.8) ? "Strong wind" :
      (windForce >= 13.9 && windForce <= 17.1) ? "Near (hard) gale" :
      (windForce >= 17.2 && windForce <= 20.7) ? "Gale" :
      (windForce >= 20.8 && windForce <= 24.4) ? "Strong gale" :
      (windForce >= 24.5 && windForce <= 28.4) ? "Storm" :
      (windForce >= 28.5 && windForce <= 32.6) ? "Violent storm" :
      (windForce >= 32.7) ? "Hurricane" : ""
    return verbalDesignation
  }
};

export const utils = new Utils();
