const mongoose = require('mongoose');
const Anuncio = require('./anuncio');
const Persona = require('./persona');
const { Schema } = mongoose;

const AreaSchema = new Schema({
    nombreArea: { type: String, required: true },
    tipo: { type: String, required: true },
    responsables: [{ type: mongoose.Types.ObjectId, ref: 'Persona' , required: true }],
    anuncios: [{type: Anuncio.schema}],
    turno: {type:String},
    grado: {type: String},
    division: {type:String}
})

module.exports = mongoose.models.Area || mongoose.model('Area', AreaSchema);