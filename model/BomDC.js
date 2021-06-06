const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCSchema = new Schema({
    proyect: {
        type: Schema.Types.ObjectId,
        ref: 'Proyect'
    },
    clips_part: {
        type: String,
    },
    clips_order: {
        type: String,
    },
    black_part: {
        type: String,
    },
    black_order: {
        type: String,
    },
    red_part: {
        type: String,
    },
    red_order: {
        type: String,
    },
    cable_part: {
        type: String,
    },
    cable_order: {
        type: String,
    },
    female_part: {
        type: String,
    },
    female_order: {
        type: String,
    },
    male_part: {
        type: String,
    },
    male_order: {
        type: String,
    },
    solar_part: {
        type: String,
    },
    solar_order: {
        type: String,
    },
    bolts_part: {
        type: String,
    },
    bolts_order: {
        type: String,
    },
    star_part: {
        type: String,
    },
    star_order: {
        type: String,
    },
    nut_part: {
        type: String,
    },
    nut_order: {
        type: String,
    },
    ilsco_part: {
        type: String,
    },
    ilsco_order: {
        type: String,
    },
    bare_part: {
        type: String,
    },
    bare_order: {
        type: String,
    },
    burndy_part: {
        type: String,
    },
    burndy_order: {
        type: String,
    },
    servit_part: {
        type: String,
    },
    servit_order: {
        type: String,
    },
    wire_part: {
        type: String,
    },
    wire_order: {
        type: String,
    },
    mc_part: {
        type: String,
    },
    mc_order: {
        type: String,
    },
    plastic_part: {
        type: String,
    },
    plastic_order: {
        type: String,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('BomDC', DCSchema);