const mongoose = require('mongoose');
const { Schema } = mongoose;

const Rol = require('./rol');
const Persona = require('./persona');

const FormularioSchema = new Schema({
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    archivos: [{
        base64: { type: String },
        type: { type: String },
        name: { type: String }
    }],
    fecha: { type: String }
})

module.exports = mongoose.models.Formulario || mongoose.model('Formulario', FormularioSchema);