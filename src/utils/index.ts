class Utils {
  getWeatherIconByDescription(weatherDescription: string, size: string) {
    let backgroundImage = "";
    switch (weatherDescription) {
      case "broken clouds":
        backgroundImage = `https://img.icons8.com/color/${ size }/000000/clouds.png`;
        break;
      case "dust":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/dry.png`
        break;
      case "few clouds":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/partly-cloudy-day.png` 
        break;
      case "light rain":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/light-rain.png`
        break;
      case "moderate rain":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/light-rain.png`
        break;
      case "light snow":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/light-snow.png`
        break;
      case "overcast clouds":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/clouds.png`
        break;
      case "proximity shower rain":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/heavy-rain.png`
        break;
        case "light shower snow":
          backgroundImage=`https://img.icons8.com/color/${ size }/000000/sleet.png`
        break;
        case "snow":
          backgroundImage=`https://img.icons8.com/color/${ size }/000000/snow.png`
        break;
        case "shower snow":
          backgroundImage=`https://img.icons8.com/color/${ size }/000000/snow-storm.png`
        break;
      case "scattered clouds":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/clouds.png`
        break;
      case "clear sky":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/summer.png`
        break;
      case "thunderstorm":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/storm.png`
        break;
      case "light intensity drizzle":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/sleet.png`
        break;
      case "fog":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/fog-day.png`
        break;
      case "mist":
        backgroundImage=`https://img.icons8.com/color/${ size }/000000/fog-day.png`
        break;
      default: backgroundImage=`https://img.icons8.com/color/${ size }/000000/summer.png`;
    }
    return backgroundImage
  };

  getWindDirectionByDeg(windDeg: number) {
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

  getWindVerbalDesignationByWindSpeed(windForce: number) {
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

  getDescriptionBackgroundImg(weatherDescription: string) {
    let backgroundImage: string = "";
    switch (weatherDescription) {
      case "broken clouds":
          backgroundImage = "clouds";
        break;
      case "dust":
          backgroundImage="desert"
        break;
      case "few clouds":
          backgroundImage="clouds"
        break;
      case "light rain":
          backgroundImage="rain"
        break;
      case "moderate rain":
        backgroundImage="rain"
        break;
      case "light snow":
          backgroundImage="snow"
        break;
      case "overcast clouds":
          backgroundImage="clouds"
        break;
      case "proximity shower rain":
          backgroundImage="heavy-rain"
        break;
      case "shower rain":
          backgroundImage="rain"
        break;
      case "light intensity shower rain":
          backgroundImage="rain"
        break;
      case "light shower snow":
          backgroundImage="sleet"
        break;
      case "snow":
          backgroundImage="snow"
        break;
      case "shower snow":
          backgroundImage="snow-storm"
        break;
      case "scattered clouds":
          backgroundImage="clouds"
        break;
      case "clear sky":
          backgroundImage="clear-sky"
        break;
      case "thunderstorm":
          backgroundImage="storm"
        break;
      case "light intensity drizzle":
          backgroundImage="sleet"
        break;
      case "fog":
          backgroundImage="fog"
        break;
      case "mist":
          backgroundImage="mist"
        break;
      default: backgroundImage="clear-sky";
    }
    return backgroundImage
  }

  /*getTempMode(temp: number, mode: boolean) {
    let result: number;
    if (mode === true) {
      result = temp;
    } else {
      result = Math.round((temp * 9/5) + 32)
    };
    return result
  }*/
};

export const utils = new Utils();
