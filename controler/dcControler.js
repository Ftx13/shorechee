const BomDC = require("../model/BomDC");
require('dotenv').config({ path: 'variables.env' });

exports.postDC = async (req, res) => {
    const { id, clips_p, clips_o, black_p, red_p, cable_p, female_p, male_p, solar_p, bolts_p, star_p,
        nut_p, ilsco_p, bare_p, burndy_p, servit_p, wire_p, mc_p, plastic_p,
        black_o, red_o, cable_o, female_o, male_o, solar_o, bolts_o, star_o,
        nut_o, ilsco_o, bare_o, burndy_o, servit_o, wire_o, mc_o, plastic_o } = req.body;
    console.log(req.body);
    try {
        const newDC = new BomDC({
            proyect: id,
            clips_part: clips_p,
            clips_order: clips_o,
            black_part: black_p,
            black_order: black_o,
            red_part: red_p,
            red_order: red_o,
            cable_part: cable_p,
            cable_order: cable_o,
            female_part: female_p,
            female_order: female_o,
            male_part: male_p,
            male_order: male_o,
            solar_part: solar_p,
            solar_order: solar_o,
            bolts_part: bolts_p,
            bolts_order: bolts_o,
            star_part: star_p,
            star_order: star_o,
            nut_part: nut_p,
            nut_order: nut_o,
            ilsco_part: ilsco_p,
            ilsco_order: ilsco_o,
            bare_part: bare_p,
            bare_order: bare_o,
            burndy_part: burndy_p,
            burndy_order: burndy_o,
            servit_part: servit_p,
            servit_order: servit_o,
            wire_part: wire_p,
            wire_order: wire_o,
            mc_part: mc_p,
            mc_order: mc_o,
            plastic_part: plastic_p,
            plastic_order: plastic_o,
        });
        console.log(newDC);
        const dc = await newDC.save();
        console.log(dc);
        res.json(dc);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
exports.obtenerProducto = async (req, res) => {
    try {
        const dc = await BomDC.findOne({ proyect: req.params.id });
        //findById(req.params.id);

        if (!dc) {
            return res.status(404).json({ msg: 'Bom not found' })
        }

        res.json(dc);
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
    }
}
// exports.putProducto = async (req, res) => {
//     // extraer la información del proyecto
//     const { image, nombre, precio, texto, mostrar } = req.body;
//     //console.log("putProducto 1", nombre, precio, image, texto, mostrar);
//     try {
//         if (nombre || precio || image || texto || mostrar) {
//             console.log("putProducto 2", nombre, precio, image, texto, mostrar);
//             // revisar el ID 
//             let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
//             // si el proyecto existe o no
//             if (!producto) return res.status(404).json({ msg: 'Ocurrio un error' });
//             res.json({ producto });
//         } else {
//             return res.status(200).json({ msg: 'Ocurrio un error' })
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Error en el servidor');
//     }
// }
// exports.deleteProducto = async (req, res) => {
//     try {
//         const producto = await Producto.findById(req.params.id);

//         if (!producto) {
//             return res.status(404).json({ msg: 'Producto no encontrado' });
//         }

//         // Check user
//         if (producto.user.toString() !== req.user.id) {
//             return res.status(401).json({ msg: 'Usuario no autorizado' });
//         }
//         await producto.remove();

//         res.json({ msg: 'Producto removido' });
//     } catch (err) {
//         console.error(err.message);

//         res.status(500).send('Server Error');
//     }
// }
// exports.obtenerTodo = async (req, res) => {
//     try {
//         const producto = await Producto.find().sort({ date: -1 });
//         res.json(producto);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// }
