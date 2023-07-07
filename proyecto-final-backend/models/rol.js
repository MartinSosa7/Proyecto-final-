const mongoose = require('mongoose');
const {Schema} = mongoose;

const RolSchema = new Schema({
 nombreRol: {type: String, required: true},
 verAnuncio: {type:Boolean},
 creaAnuncio: {type:Boolean},
 gestiona: {type: Boolean},
 personas: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
})

module.exports = mongoose.models.Rol || mongoose.model('Rol', RolSchema);