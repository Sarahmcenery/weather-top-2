import { stationStore } from "../models/station-store.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const viewData = {
      name: "Station",
      station: station,
      temperature: "Temperature",
    };
    response.render("station-view", viewData);
  },
};
