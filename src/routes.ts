import { Router } from "express";
import { settingsControllers } from "./controllers/settingControllers";

const routes = Router();

const SettingsControllers = new settingsControllers();

routes.post("/settings", SettingsControllers.create);

export { routes };