const { Router } = require('express');
const router = Router();

// Controllers
const UsuarioController = require('../controllers/UsuarioController');
const SesionController = require('../controllers/SesionController');

router.get('/', (req,res) => {
    res.send('Raiz API')
   });

router.get('/listarUsuarios', UsuarioController.all);
router.get('/buscarUsuario/:id', UsuarioController.find);
router.post('/crearUsuario', UsuarioController.create);

router.get('/listarSesiones', SesionController.all);
router.get('/buscarSesion/:id', SesionController.find);
router.post('/crearSesion', SesionController.all);

module.exports = router;
