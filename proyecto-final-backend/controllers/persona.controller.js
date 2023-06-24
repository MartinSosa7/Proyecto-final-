const Persona = require('../models/persona');
const Rol = require('../models/rol'); 
const Area =  require('../models/area');

const personaCtrl = {}


personaCtrl.getPersona = async (req, res) => {
    console.log(req.query.id);
    const apersona = await Persona.findById(req.query.id)
    .populate('rol')
    .populate('area');
    res.json(apersona);
    console.log(apersona);
}

personaCtrl.getPersonas = async (req, res) => {
    var apersonas = await Persona.find()
    .populate('rol')
    .populate('area');
    res.json(apersonas);
}

personaCtrl.createPersona = async (req, res) => {
    var apersona = new Persona(req.body);
    console.log("dni: "+ req.body.dni);
    const personaEncontradaPorDni = await Persona.findOne({dni:{$eq:req.body.dni}});
    console.log(personaEncontradaPorDni);
    if (personaEncontradaPorDni==null || personaEncontradaPorDni=="" || personaEncontradaPorDni==undefined) {
        try {
            await apersona.save();
            res.json({
                'status': '1',
                'msg': 'Persona guardada.'
            })
        } catch (error) {
            res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion'
            })
        }    
    }else{
        res.json({
            status:"2",
            msg:"Ya se encuentra una persona registrada con ese numero de dni"
        })
    }
}

personaCtrl.editPersona = async (req, res) => {
    const persona = new Persona(req.body);
    console.log("Dni:"+req.body.dni);
    console.log("ID"+req.body._id);
    const pSinCambioDni = await Persona.findOne({$and:[
                                                {_id:{$eq:req.body._id}},
                                                {dni:{$eq:req.body.dni}}
                                            ]});
    console.log(pSinCambioDni);
    
    if(pSinCambioDni!=null && pSinCambioDni!="" && pSinCambioDni!=undefined){
        try {
            console.log("no hubo cambio de dni");
            await Persona.updateOne({_id: req.body._id}, persona);
            res.json({
                'status': '1',
                'msg': 'Persona actualizada correctamente'
             }) 
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            }) 
        }
    }else{
        const personaEncontradaPorDni = await Persona.findOne({$and:[
            {_id:{$ne:req.body._id}},
            {dni:{$eq:req.body.dni}}
          ]});
        console.log("persona buscada por dni ");
        console.log(personaEncontradaPorDni);
        if (personaEncontradaPorDni!=null && personaEncontradaPorDni!="" && personaEncontradaPorDni!=undefined) {
            res.json({
                'status':"2",
                'msg':"Ya se encuentra una persona registrada con ese numero de dni"
            })
        }else{
            try {
                await Persona.updateOne({_id: req.body._id}, persona);
                res.json({
                    'status': '1',
                    'msg': 'Persona actualizada correctamente'
                }) 
            } catch (error) {
                res.status(400).json({
                    'status': '0',
                    'msg': 'Error procesando la operacion'
                }) 
            }
        }
    }
}

personaCtrl.deletePersona = async (req, res)=>{
    try {
        await Persona.deleteOne({_id: req.query.id});
        res.json({
            status: '1',
            msg: 'Persona removed'
        }) 
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        }) 
    }
}


personaCtrl.getPersonaByDni = async (req, res) => {
    criteria={};
    if (req.query.dni != null){
        criteria.dni = { $regex: req.query.dni, $options: "i" }
    }
    var persona =  await Persona.find(criteria).populate('roles');
    res.json(persona);
}

module.exports = personaCtrl;