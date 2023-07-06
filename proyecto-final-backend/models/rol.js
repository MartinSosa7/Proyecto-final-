const mongoose = require('mongoose');
const {Schema} = mongoose;

const RolSchema = new Schema({
 nombreRol: {type: String, required: true},
 verAnuncio: {type:Boolean, required: true},
 creaAnuncio: {type:Boolean, required: true},
 gestiona: {type: Boolean, required: true},
 personas: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
})

module.exports = mongoose.models.Rol || mongoose.model('Rol', RolSchema);