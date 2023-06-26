const mongoose = require('mongoose');
const {Schema} = mongoose;

const FormularioSchema = new Schema({
 tipo: {type:String, required:true}
})

module.exports = mongoose.models.Formulario || mongoose.model('Formulario', FormularioSchema);