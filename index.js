const express = require("express");
const bodyParse = require("body-parser");
const path = require('path');
const app = express();
const port = process.env.PORT || 8001;
const cors = require("cors");
const conectarDB = require("./config/db");
conectarDB();
require("dotenv").config({ path: "variables.env" });

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: false }));
app.use(cors());
app.use("/api/proyect", require("./routes/proyect"));
app.use("/api/dc", require("./routes/dc"));

if (process.env.NODE_ENV === 'production') {
    // Set a static folder
    app.use(express.static('build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
}

app.listen(port, "0.0.0.0", () => {
    console.log(`Escuchando Servidor en el puerto ${port}`);
});
