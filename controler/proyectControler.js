const Proyect = require("../model/Proyecto");
require('dotenv').config({ path: 'variables.env' });

exports.postProyect = async (req, res) => {
    const { deliver, address, contact } = req.body;
    try {
        const newProyecto = new Proyect({
            deliver: deliver,
            address: address,
            contact: contact,
        });
        const proyecto = await newProyecto.save();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
exports.obtenerTodo = async (req, res) => {
    try {
        const producto = await Proyect.find().sort({ date: -1 });
        res.json(producto);
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
// exports.obtenerProducto = async (req, res) => {
//     try {
//         const producto = await Producto.findById(req.params.id);

//         if (!producto) {
//             return res.status(404).json({ msg: 'Producto no encontrad' })
//         }

//         res.json(producto);
//     } catch (err) {
//         console.error(err.message);

//         res.status(500).send('Server Error');
//     }
// }