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

  getCelsiusToFahrenheit(station, temperature, lastTemperature) {
    let celsiusToFahrenheit = null;
    if (station.readings.length > 0) {
      lastTemperature =
        station.readings[station.readings.length - 1].temperature;
    }
    celsiusToFahrenheit = (lastTemperature * 9) / 5 + 32;
    return celsiusToFahrenheit;
  },
};
