const mongoose = require('mongoose');
const {Schema} = mongoose;

const Persona = require ('./persona'); 

const UsuarioSchema = new Schema({
 username: {type: String, required: true},
 password: {type: String, required: true},
 persona: {type: Schema.Types.ObjectId, ref: Persona, required: true},
})

module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);