const mongoose = require('mongoose');
const {Schema} = mongoose;

const Area = require ('./area'); 

const AnuncioSchema = new Schema({
 titulo: {type: String, required: true},
 descripcion: {type: String, required: true},
 fechaDesde: {type: String, required: true},
 fechaHasta: {type:String, required: true},
 rescursos: [{type: String}],
 area:{type: Schema.Types.ObjectId, ref: Area, required: true},
 tipo: {type:String, required:true}
})

module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);