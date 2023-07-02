const Usuario = require('../models/usuario');
//importamos el manejador de token
//const jwt = require('jsonwebtoken');

const usuarioCtrl = {}


// Dar de alta un Usuario (POST)  Recibe un request - entrega un response
usuarioCtrl.createUsuario = async (req, res) => {
    console.log(req.body);
    var usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Usuario guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

usuarioCtrl.loginUsuario = async (req, res)=>{

    const criteria = {
            username: req.body.username,
            password: req.body.password
    }

    try{
        const user = await Usuario.findOne(criteria);
        if (!user) {
            res.json({
                'status': 0,
                'msg': "not found" 
            })
        }else{
            //preparo un token para ser enviado en caso de loguin correcto
            const unToken = jwt.sign({id: user._id}, "secretkey");
            res.json({
                'status': 1,
                'msg': "success",
                username: user.username, 
                perfil: user.perfil,
                userid: user._id,
                token: unToken  //retorno del tokens
            })
        }

    }catch(error){
        res.json({
            'status': 0,
            'msg': 'error'
        })
    }

}

//filtra por dni
usuarioCtrl.getUsuarioByPersona = async (req, res) => {
    console.log(req.query.dni);
    var usuario =  await Usuario.find({"persona.dni":{$eq:req.query.dni}});
    res.json(usuario);
    console.log("persona encontrada: "+usuario);
}



module.exports = usuarioCtrl;