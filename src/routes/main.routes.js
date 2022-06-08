const express = require ("express");
const routes = express.Router();
const mainController = require ("../controller/mainController");

//rutas
routes.get("/", mainController.home);
routes.get("/detail/:id", mainController.detail);

module.exports = routes; 