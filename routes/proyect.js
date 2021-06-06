const express = require("express");
const { postProyect, obtenerTodo } = require("../controler/proyectControler");
const ruta = express.Router();

ruta.post("/", postProyect);

// ruta.put("/:id", auth, putProducto);

// ruta.delete("/:id", auth, deleteProducto);

ruta.get('/', obtenerTodo);

// ruta.get('/all/:id', [auth, idCheck('id')], obtenerProducto);

module.exports = ruta;