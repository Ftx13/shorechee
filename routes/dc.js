const express = require("express");
const { postDC, obtenerProducto } = require("../controler/dcControler");
const ruta = express.Router();

ruta.post("/", postDC);

ruta.get('/all/:id', obtenerProducto);

// ruta.put("/:id", auth, putProducto);

// ruta.delete("/:id", auth, deleteProducto);

// ruta.get('/', obtenerTodo);



module.exports = ruta;