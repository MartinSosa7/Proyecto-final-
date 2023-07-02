const mongoose = require('mongoose');
const {Schema} = mongoose;

const Area = require ('./area'); 

const AnuncioSchema = new Schema({
 titulo: {type: String},
 descripcion: {type: String, required: true},
 fechaDesde: {type: String},
 fechaHasta: {type:String},
 recursos: [{
    base64:{type:String},
    type:{type: String},
}],
 tipo: {type:String}
})

module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);