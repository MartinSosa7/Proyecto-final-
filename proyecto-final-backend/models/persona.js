const mongoose = require('mongoose');
const {Schema} = mongoose;

 

const PersonaSchema = new Schema({
 apellido: {type: String, required: true},
 nombre: {type: String, required: true},
 dni: {type: Number, required: true}, 
 direccion: {type:String, required: true},
 telefono: {type:String, required:true},
 email: {type: String, required: true},
 roles:[{type: mongoose.Types.ObjectId, ref: 'Rol'}],
 areas:[{type: Schema.Types.ObjectId, ref: 'Area'}]
})

module.exports = mongoose.models.Persona || mongoose.model('Persona', PersonaSchema);