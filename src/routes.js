const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const consultaController = require("./app/controllers/consulta/ConsultaController")
const usuarioController =  require("./app/controllers/usuario/UsuarioController")

const routes = new Router();

// consulta End-points
routes.post("/consulta", asyncHandler(consultaController.store));

routes.get("/consulta", asyncHandler(consultaController.index));

routes.put("/consulta/:id", asyncHandler(consultaController.update));

routes.get("/consulta/:id", asyncHandler(consultaController.findOne));

routes.delete("/consulta/:id", asyncHandler(consultaController.delete));

// usuario End-points
routes.post("/usuario", asyncHandler(usuarioController.store));

routes.get("/usuario", asyncHandler(usuarioController.index));

routes.put("/usuario/:id", asyncHandler(usuarioController.update));

routes.get("/usuario/:id", asyncHandler(usuarioController.findOne));

routes.delete("/usuario/:id", asyncHandler(usuarioController.delete));



module.exports = routes;
