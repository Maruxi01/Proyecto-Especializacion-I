const UsuarioController = {};

const Usuario = require('../models/Usuario');

// Obtiene usuarios
UsuarioController.all = async (req, res) => {
    Usuario.find().exec().then(tasks => res.send(tasks));
}

// Crear usuario
UsuarioController.create = async (req, res) => {
    const newUsuario = new Usuario({
        username: req.body.username,
        password: req.body.password
    })

    Usuario.create(newUsuario).then(() => {
        res.status(201).send('Usuario creado con exito')
    }).catch(error =>{
        res.status(500).send('Error: ' + error)})
}

// Retorna un usuario especifico
UsuarioController.find = (req, res) => {
    Usuario.findById(req.params.id)
    .exec()
    .then(user => {
    res.status(200).send(user)
    })
}

// Retonar sesiones de un usuario

module.exports = UsuarioController;
