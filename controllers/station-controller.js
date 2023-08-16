import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const latitude = await stationStore.getStationById(request.params.id);
    const longitude = await stationStore.getStationById(request.params.id);
    const minimumTemperature = stationAnalytics.getMinimumTemperature(station);
    const maximumTemperature = stationAnalytics.getMaximumTemperature(station);
    const minimumPressure = stationAnalytics.getMinimumPressure(station);
    const maximumPressure = stationAnalytics.getMaximumPressure(station);
    const minimumWindSpeed = stationAnalytics.getMinimumWindSpeed(station);
    const maximumWindSpeed = stationAnalytics.getMaximumWindSpeed(station);
    const temperature = await readingStore.getReadingById(request.params.id);
    const readings = await readingStore.getReadingById(request.params.id);
    const lastCode = stationAnalytics.getLastCode(station);
    const lastTemperature = stationAnalytics.getLastTemperature(station);
    const lastPressure = stationAnalytics.getLastPressure(station);
    const lastWindSpeed = stationAnalytics.getLastWindSpeed(station);
    const celsiusToFahrenheit = stationAnalytics.getCelsiusToFahrenheit(station);
    const codeToText = stationAnalytics.getCodeToText(station); 
    const kmToBeaufort = stationAnalytics.getKmToBeaufort(station);
    const convertWind = stationAnalytics.getConvertWind(station);
    const lastWindDirection = stationAnalytics.getLastWindDirection(station);
    const windDirectionToCompass = stationAnalytics.getWindDirectionToCompass(station);
   
  

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
      minimumWindSpeed: minimumWindSpeed,
      maximumWindSpeed: maximumWindSpeed,
      temp: "Temperature",
      temperature: temperature,
      latitude: latitude,
      longitude: longitude,
      readings: readings,
      celsiusToFahrenheit: celsiusToFahrenheit,
      codeToText: codeToText,
      kmToBeaufort: kmToBeaufort,
      convertWind: convertWind,
      latestWind: lastWindSpeed,
      lastWindDirection: lastWindDirection,
      windDirectionToCompass: windDirectionToCompass,
    
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
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
  },
};
