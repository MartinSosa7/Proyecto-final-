const Area =  require('../models/area');

const areaCtrl = {}

areaCtrl.getArea = async (req, res) => {
    console.log(req.params.id);
    const aarea = await Area.findById(req.params.id)
    .populate('responsables')
    res.json(aarea);
    console.log(aarea);
}

areaCtrl.getAreas = async (req, res) => {
    var aareas = await Area.find()
    .populate('responsables')
    res.json(aareas);
}

areaCtrl.createArea = async (req, res) => {
    var aarea = new Area(req.body);
    try {
        await aarea.save();
        res.json({
            'status': '1',
            'msg': 'Area guardada'
        })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error al crear el area'
        })
    } 
}

areaCtrl.editArea = async (req, res) => {
    const area = new Area(req.body);
    try {
        await Area.updateOne({_id: req.body._id}, area);
        res.json({
            'status': '1',
            'msg': 'Area actualizada correctamente'
            }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'No se pudo actualizar el área'
        }) 
    }
}

areaCtrl.deleteArea = async (req, res)=>{
    try {
        await Area.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Area eliminada correctamente'
        }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el area'  
        }) 
    }
}


areaCtrl.getAreaByName = async (req, res) => {
    criteria={};
    if (req.query.name != null){
        criteria.name = { $regex: req.query.name, $options: "i" }
    }
    var area =  await Area.find(criteria).populate('responsables');
    res.json(area);
}

module.exports = areaCtrl;