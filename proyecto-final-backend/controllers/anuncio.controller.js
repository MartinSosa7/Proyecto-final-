const Anuncio =  require('../models/anuncio');

const anuncioCtrl = {}

anuncioCtrl.getAnuncio = async (req, res) => {
    console.log(req.params.id);
    const aanuncio = await Anuncio.findById(req.params.id)
    res.json(aanuncio);
    console.log(aanuncio);
}

anuncioCtrl.getAnuncios = async (req, res) => {
    var aanuncios = await Anuncio.find()
    res.json(aanuncios);
}

anuncioCtrl.createAnuncio = async (req, res) => {
    var aanuncio = new Anuncio(req.body);
    try {
        await aanuncio.save();
        res.json({
            'status': '1',
            'msg': 'Anuncio guardado'
        })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error al crear el anuncio'
        })
    } 
}

anuncioCtrl.editAnuncio = async (req, res) => {
    const anuncio = new Anuncio(req.body);
    try {
        await Anuncio.updateOne({_id: req.body._id}, anuncio);
        res.json({
            'status': '1',
            'msg': 'Anuncio actualizado correctamente'
            }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'No se pudo actualizar el anuncio'
        }) 
    }
}

anuncioCtrl.deleteAnuncio = async (req, res)=>{
    try {
        await Anuncio.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Anuncio eliminado correctamente'
        }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el anuncio'  
        }) 
    }
}


anuncioCtrl.getAnunciosGenerales = async (req, res) => {
    criteria={};
    if (req.query.tipo != null){
        criteria.tipo = req.query.tipo 
    }
    var anuncio =  await Anuncio.find(criteria);
    res.json(anuncio);
}

module.exports = anuncioCtrl;