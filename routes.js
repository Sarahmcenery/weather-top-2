import express from "express";
import { indexController } from "./controllers/index-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { stationController } from "./controllers/station-controller.js";

export const router = express.Router();

router.get("/", indexController.index);
router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);
router.get("/index", aboutController.index);
router.get("/station/:id", stationController.index);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);

router.post("/dashboard/addstation", dashboardController.addStation);
router.post("/station/:id/addreading", stationController.addReading);