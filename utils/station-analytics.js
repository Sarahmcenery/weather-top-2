export const stationAnalytics = {
  getMinimumTemperature(station) {
    let minimumTemperature = null;
    if (station.readings.length > 0) {
      minimumTemperature = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minimumTemperature.temperature) {
          minimumTemperature = station.readings[i];
        }
      }
    }
    return minimumTemperature;
  },

  getMaximumTemperature(station) {
    let maximumTemperature = null;
    if (station.readings.length > 0) {
      maximumTemperature = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maximumTemperature.temperature) {
          maximumTemperature = station.readings[i];
        }
      }
    }
    return maximumTemperature;
  },

  getMinimumPressure(station) {
    let minimumPressure = null;
    if (station.readings.length > 0) {
      minimumPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minimumPressure.pressure) {
          minimumPressure = station.readings[i];
        }
      }
    }
    return minimumPressure;
  },

  getMaximumPressure(station) {
    let maximumPressure = null;
    if (station.readings.length > 0) {
      maximumPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maximumPressure.pressure) {
          maximumPressure = station.readings[i];
        }
      }
    }
    return maximumPressure;
  },
  
  getMinimumWindSpeed(station) {
    let minimumWindSpeed = null;
    if (station.readings.length > 0) {
      minimumWindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minimumWindSpeed.windSpeed) {
          minimumWindSpeed = station.readings[i];
        }
      }
    return minimumWindSpeed
    
    } else { 
      return "Invalid Reading";
    }
  },

  getMaximumWindSpeed(station) {
    let maximumwindSpeed = null;
    if (station.readings.length > 0) {
      maximumwindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maximumwindSpeed.windSpeed) {
          maximumwindSpeed = station.readings[i];
        }
      }
    }
    return maximumwindSpeed;
  },

  getLastCode(station) {
    let lastCode = null;
    if (station.readings.length > 0) {
      lastCode = station.readings[station.readings.length - 1].code;
    }

    return lastCode;
  },

  getLastTemperature(station) {
    let lastTemperature = null;
    if (station.readings.length > 0) {
      lastTemperature =
        station.readings[station.readings.length - 1].temperature;
    }

    return lastTemperature;
  },

  getLastWindSpeed(station) {
    let LastWindSpeed = null;
    if (station.readings.length > 0) {
      LastWindSpeed = station.readings[station.readings.length - 1].windSpeed;
    }

    return LastWindSpeed;
  },

  getLastPressure(station) {
    let lastPressure = null;
    if (station.readings.length > 0) {
      lastPressure = station.readings[station.readings.length - 1].pressure;
    }

    return lastPressure;
  },

  getLastWindDirection(station) {
    let lastWindDirection = null;
    if (station.readings.length > 0) {
      lastWindDirection =
        station.readings[station.readings.length - 1].windDirection;
    }

    return lastWindDirection;
  },

  getCelsiusToFahrenheit(station, temperature, lastTemperature) {
    let celsiusToFahrenheit = null;
    if (station.readings.length > 0) {
      lastTemperature =
        station.readings[station.readings.length - 1].temperature;
    }
    celsiusToFahrenheit = (lastTemperature * 9) / 5 + 32;
    return celsiusToFahrenheit;
  },

  getConvertWind(
    station,
    windSpeed,
    temperature,
    lastTemperature,
    latestWind,
    latestTemp
  ) {
    let convertWind = null;
    if (station.readings.length > 0) {
      latestWind = station.readings[station.readings.length - 1].windSpeed;
    }
    if (station.readings.length > 0) {
      latestTemp = station.readings[station.readings.length - 1].temperature;
    }
    convertWind =
      13.12 +
      0.6215 * latestTemp -
      11.37 * Math.pow(latestWind, 0.16) +
      0.3965 * (latestTemp * Math.pow(latestWind, 0.16));
    return convertWind.toFixed(2);
  },

  getWindDirectionToCompass(station, lastWindDirection) {
    let windDirectionToCompass = null;
    if (station.readings.length > 0) {
      lastWindDirection =
        station.readings[station.readings.length - 1].windDirection;

      if (lastWindDirection < 11.25) {
        return "North";
      } else if (lastWindDirection >= 11.25 && lastWindDirection < 33.75) {
        return "North North East";
      } else if (lastWindDirection >= 33.75 && lastWindDirection < 56.25) {
        return "North East";
      } else if (lastWindDirection >= 56.25 && lastWindDirection < 78.75) {
        return "East North East";
      } else if (lastWindDirection >= 78.75 && lastWindDirection < 101.25) {
        return "East";
      } else if (lastWindDirection >= 101.25 && lastWindDirection < 123.75) {
        return "East South East";
      } else if (lastWindDirection >= 123.75 && lastWindDirection < 146.25) {
        return "South East";
      } else if (lastWindDirection >= 146.25 && lastWindDirection < 168.75) {
        return "South South East";
      } else if (lastWindDirection >= 168.75 && lastWindDirection < 191.25) {
        return "South";
      } else if (lastWindDirection >= 191.25 && lastWindDirection < 213.75) {
        return "South South West";
      } else if (lastWindDirection >= 213.75 && lastWindDirection < 236.25) {
        return "South West";
      } else if (lastWindDirection >= 236.25 && lastWindDirection < 258.75) {
        return "West South West";
      } else if (lastWindDirection >= 258.75 && lastWindDirection < 281.25) {
        return "West";
      } else if (lastWindDirection >= 281.25 && lastWindDirection < 303.75) {
        return "West North West";
      } else if (lastWindDirection >= 303.75 && lastWindDirection < 326.25) {
        return "North West";
      } else if (lastWindDirection >= 326.25 && lastWindDirection < 348.75) {
        return "North North West";
      }
    }
  },

  getKmToBeaufort(station, lastWindDirection) {
    let kmToBeaufort = null;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].windSpeed == 1) {
        return "0";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 1 &&
        station.readings[station.readings.length - 1].windSpeed <= 5
      ) {
        return "1";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 6 &&
        station.readings[station.readings.length - 1].windSpeed <= 11
      ) {
        return "2";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 12 &&
        station.readings[station.readings.length - 1].windSpeed <= 19
      ) {
        return "3";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 20 &&
        station.readings[station.readings.length - 1].windSpeed <= 28
      ) {
        return "4";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 29 &&
        station.readings[station.readings.length - 1].windSpeed <= 38
      ) {
        return "5";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 39 &&
        station.readings[station.readings.length - 1].windSpeed <= 49
      ) {
        return "6";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 50 &&
        station.readings[station.readings.length - 1].windSpeed <= 61
      ) {
        return "7";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 62 &&
        station.readings[station.readings.length - 1].windSpeed <= 74
      ) {
        return "8";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 75 &&
        station.readings[station.readings.length - 1].windSpeed <= 88
      ) {
        return "9";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 89 &&
        station.readings[station.readings.length - 1].windSpeed <= 102
      ) {
        return "10";
      } else if (
        station.readings[station.readings.length - 1].windSpeed >= 103 &&
        station.readings[station.readings.length - 1].windSpeed <= 117
      ) {
        return "11";
      }
    }
  },

    getCodeToText(station, code) {
    let codeToText = null;
        let icon = null;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].code == 100) {
        return "Clear"; 
      } else if (station.readings[station.readings.length - 1].code == 200) {
        return "Partial Clouds";
      } else if (station.readings[station.readings.length - 1].code == 300) {
        return "Cloudy";
      } else if (station.readings[station.readings.length - 1].code == 400) {
        return "Light Showers";
      } else if (station.readings[station.readings.length - 1].code == 500) {
        return "Heavy Showers";
      } else if (station.readings[station.readings.length - 1].code == 600) {
        return "Rain";
      } else if (station.readings[station.readings.length - 1].code == 700) {
        return "Snow";
      } else if (station.readings[station.readings.length - 1].code == 800) {
        return "Thunder";
      }
    }
      return [codeToText, icon];
  },  
   
};

