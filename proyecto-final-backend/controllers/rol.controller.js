const Rol = require("../models/rol");
const rolCtrl = {};

rolCtrl.getRol = async (req, res) => {
    const rol = await Rol.findById(req.params.id);
    res.json(rol);
}

rolCtrl.getRoles = async (req, res) => {
  var roles = await Rol.find().populate('personas');
  res.json(roles);
}

rolCtrl.createRol = async (req, res) => {
  var rol = new Rol(req.body);
  const rolEncontrado = await Rol.findOne({nombreRol:{$eq:req.body.nombreRol}});
    if (rolEncontrado==null || rolEncontrado=="" || rolEncontrado==undefined) {
          try {
            await rol.save();
            res.json({
              status: "1",
              msg: "Rol agregado exitosamente",
            });
          } catch (error) {
            res.status(400).json({
              status: "0",
              msg: "Error al agregar Rol",
            });
          }
    }else{
      res.json({
          status:"2",
          msg:"Ya se encuentra un rol registrado con ese nombre"
      })
  }
}

rolCtrl.editRol = async (req, res) => {
  const bodyRol = new Rol(req.body);
  const rolEncontrado = await Rol.findOne({nombreRol:{$eq:req.body.nombreRol}});
    if (rolEncontrado==null || rolEncontrado=="" || rolEncontrado==undefined) {
        try {
          await Rol.updateOne({ _id: req.body._id }, bodyRol);
          res.json({
            status: "1",
            msg: "Rol Actualizado",
          });
        } catch (error) {
          res.status(400).json({
            status: "0",
            msg: "Error procesando la operacion",
          });
        }
    }else{
        res.json({
            status:"2",
            msg:"Ya se encuentra un rol registrado con ese nombre"
        })
    }
}

rolCtrl.deleteRol = async (req, res) => {
  try {
    await Rol.deleteOne({ _id: req.params.idRol });
    res.json({
      status: "1",
      msg: "Rol Eliminado",
    });
  }catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};


module.exports = rolCtrl;



