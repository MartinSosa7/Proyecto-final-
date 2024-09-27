const Area =  require('../models/area');
const Anuncio = require('../models/anuncio');
const areaCtrl = {}

areaCtrl.getArea = async (req, res) => {
    //console.log(req.params.id);
    const aarea = await Area.findById(req.params.id)
    .populate('responsables')
    res.json(aarea);
    //console.log(aarea);
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


areaCtrl.getAreaByType = async (req, res) => {
    let criteria = {};
    if(req.query.tipo != ''){
        criteria.tipo = req.query.tipo;
    }
    var area = await Area.findOne(criteria).populate('responsables');
    res.json(area);
}


//FUNCIONES DE ANUNCIOS

areaCtrl.addAnuncio = async (req, res) =>{
    var area = await Area.findById(req.params.idArea);
    var anuncio = new Anuncio(req.body);
    try{
        area.anuncios.push(anuncio);
        await area.save();
        res.status(200).json({
            'status':'1',
            'msg':'anuncio guardado'
        })

    }
    catch{
        res.status(400).json({
            'status': '0',
            'msg':'error al crear anuncio'
        })

    }

}


areaCtrl.getAnuncio = async (req, res) => {
    var area = await Area.findById(req.params.idArea);
    var anuncio = area.anuncios.id(req.params.idAnuncio);
    res.json(anuncio);
}

areaCtrl.deleteAnuncio = async (req, res) =>{
    var area = await Area.findById(req.params.idArea);
    try{
        area.anuncios.pull(req.params.idAnuncio);
        await area.save();
        res.status(200).json({
            'status':'1',
            'msg':'Anuncio borrado con exito'
        })
    }
    catch{
        res.status(400).json({
            'status':'0',
            'msg':'error al borrar Anuncio'
        })

    }

}

areaCtrl.editAnuncio = async (req, res) => {
    var nuevoAnuncio = new Anuncio(req.body);
    var area = await Area.findById(req.params.idArea);
    try {
      var anuncio = area.anuncios.id(req.params.idAnuncio);
      Object.assign(anuncio, nuevoAnuncio);
      area.markModified('anuncios'); // Mark the 'anuncios' field as modified
      await area.save();
      res.status(200).json({
        'status': '1',
        'msg': 'Anuncio editado'
      });
    } catch (error) {
      res.status(400).json({
        'status': '0',
        'msg': 'error al editar Anuncio'
      });
    }
  };


module.exports = areaCtrl;