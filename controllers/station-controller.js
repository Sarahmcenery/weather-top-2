import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const minimumTemperature = stationAnalytics.getMinimumTemperature(station);
    const maximumTemperature = stationAnalytics.getMaximumTemperature(station);
    const minimumPressure = stationAnalytics.getMinimumPressure(station);
    const maximumPressure = stationAnalytics.getMaximumPressure(station);
    const temperature = await readingStore.getReadingById(request.params.id);
    const readings = await readingStore.getReadingById(request.params.id);
    const lastCode = stationAnalytics.getLastCode(station);
    const lastTemperature = stationAnalytics.getLastTemperature(station);
    const lastPressure = stationAnalytics.getLastPressure(station);
    const lastWindSpeed = stationAnalytics.getLastWindSpeed(station);
    const celsiusToFahrenheit = stationAnalytics.getCelsiusToFahrenheit(station);

    const viewData = {
      title: "Station",
      station: station,
      weather: "Code",
      lastCode: lastCode,
      lastTemperature: lastTemperature,
      lastPressure: lastPressure,
      lastWindSpeed: lastWindSpeed,
      minimumTemperature: minimumTemperature,
      maximumTemperature: maximumTemperature,
      minimumPressure: minimumPressure,
      maximumPressure: maximumPressure,
      temp: "Temperature",
      temperature: temperature,
      readings: readings,
      celsiusToFahrenheit: celsiusToFahrenheit,
    };
    response.render("station-view", viewData);
  },

  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code: request.body.code,
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
      kmToBeaufort: Number(request.body.windSpeed),
    };
    console.log(`adding reading ${newReading.title}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  async deleteReading(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
    await readingStore.deleteReading(request.params.readingId);
    response.redirect("/station/" + stationId);
  },
};
