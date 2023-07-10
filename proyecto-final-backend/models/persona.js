const mongoose = require('mongoose');
const {Schema} = mongoose;

const Rol = require ('./rol'); 

const PersonaSchema = new Schema({
 apellido: {type: String, required: true},
 nombre: {type: String, required: true},
 dni: {type: Number, required: true}, 
 direccion: {type:String, required: true},
 telefono: {type:String, required:true},
 email: {type: String, required: true},
 rol:{type: String},
 areas:[{type: Schema.Types.ObjectId, ref: 'Area'}],
 username:{type: String},
 password:{type: String}


})

module.exports = mongoose.models.Persona || mongoose.model('Persona', PersonaSchema);