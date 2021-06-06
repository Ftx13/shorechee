const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyectSchema = new Schema({
    deliver: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: Number,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Proyect', ProyectSchema);