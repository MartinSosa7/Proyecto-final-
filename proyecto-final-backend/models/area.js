const mongoose = require('mongoose');
const {Schema} = mongoose;

const AreaSchema = new Schema({
 nombreArea: {type: String, required: true},
 tipo: {type:String, required:true},
 responsables: [{type: mongoose.Types.ObjectId, ref: 'Persona', required:true}]
})

module.exports = mongoose.models.Area || mongoose.model('Area', AreaSchema);