const SesionController = {};
const Sesion = require("../models/Sesion");

// Retornamos las sesiones
SesionController.all = async (req, res) => {
  Sesion.find()
    .exec()
    .then((tasks) => res.send(tasks));
};
// Creamos una sesion
SesionController.create = async (req, res) => {
  const newSesion = new Sesion({
    date: req.body.date,
    score: req.body.score,
    duration: req.body.duration,
  });

  Sesion.create(newSesion)
    .then(() => {
      res.status(201).send("Producto creado con exito");
    })
    .catch((error) => {
      res.status(500).send({ error: error });
    });
};

// Retorna un sesion especifica
SesionController.find = (req, res) => {
    Session.findById(req.params.id)
    .exec()
    .then(sesion => {
    res.status(200).send(sesion)
    })
   }
   
   module.exports = SesionController;
