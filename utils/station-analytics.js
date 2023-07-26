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
};
