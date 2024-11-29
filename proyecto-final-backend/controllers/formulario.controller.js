const Form =  require('../models/formulario');

const formCtrl = {}

formCtrl.getForm = async (req, res) => {
    const aform = await Form.findById(req.params.id);
    res.json(aform);
}

formCtrl.getForms = async (req, res) => {
    var aforms = await Form.find();
    res.json(aforms);
}

formCtrl.createForm = async (req, res) => {
    var aform = new Form(req.body);
    try {
        await aform.save();
        res.json({
            'status': '1',
            'msg': 'Formulario guardado'
        })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error al crear el Formulario'
        })
    } 
}

formCtrl.editForm = async (req, res) => {
    const form = new Form(req.body);
    try {
        await Form.updateOne({_id: req.body._id}, form);
        res.json({
            'status': '1',
            'msg': 'Formulario actualizado correctamente'
            }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'No se pudo actualizar el formulario'
        }) 
    }
}

formCtrl.deleteForm = async (req, res)=>{
    try {
        await Form.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Formulario eliminado correctamente'
        }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el formulario'  
        }) 
    }
}

formCtrl.getFormByRol = async (req, res)=>{
    var aforms = await Form.find();
    var forms  = [];
    if (req.query.name != null){
        aforms.forEach((element)=>{
            if (element.name == req.query.name){
                forms.push(element);
            }
        });
    }
    res.json(forms);
}

module.exports = formCtrl;