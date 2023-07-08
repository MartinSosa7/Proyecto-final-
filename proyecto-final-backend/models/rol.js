const mongoose = require('mongoose');
const {Schema} = mongoose;

const RolSchema = new Schema({
 nombreRol: {type: String, required: true},
<<<<<<< HEAD
 verAnuncio: {type:Boolean, required: true},
 creaAnuncio: {type:Boolean, required:true},
 gestiona: {type: Boolean, required: true},
 personas: [{type: mongoose.Types.ObjectId, ref: 'Persona'}],
 checked:{type: Boolean},
=======
 verAnuncio: {type:Boolean},
 creaAnuncio: {type:Boolean},
 gestiona: {type: Boolean},
 personas: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
>>>>>>> origin/develop
})

module.exports = mongoose.models.Rol || mongoose.model('Rol', RolSchema);