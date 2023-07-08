const mongoose = require('mongoose');
const {Schema} = mongoose;


const AnuncioSchema = new Schema({
 titulo: {type: String},
 descripcion: {type: String, required: true},
<<<<<<< HEAD
 fechaDesde: {type: String, required: true},
 fechaHasta: {type:String, required: true},
 recursos: [{type: String}],
 area:{type: Schema.Types.ObjectId, ref: 'Area', required: true},
 tipo: {type:String, required:true}
=======
 descripcionCard: {type: String},
 fechaDesde: {type: String},
 fechaHasta: {type:String},
 recursos: [{
    base64:{type:String},
    type:{type: String},
    name:{type: String}
}],
 tipo: {type:String}
>>>>>>> origin/develop
})

module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);