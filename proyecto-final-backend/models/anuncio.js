const mongoose = require('mongoose');
const {Schema} = mongoose;


const AnuncioSchema = new Schema({
    titulo: {type: String},
    descripcionCard: {type: String},
    fechaDesde: {type: String},
    fechaHasta: {type:String},
    recursos: [{
        base64:{type:String},
        type:{type: String},
        name:{type: String}
    }],
    tipo: {type:String}

})

module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);