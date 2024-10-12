const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router()

router.post("/exercicio1/", ControllerExercicio.Somar)
router.post("/exercicio2/", ControllerExercicio.Sub)
router.post("/exercicio3/", ControllerExercicio.Div)
router.post("/exercicio4/", ControllerExercicio.Mult)
router.post("/exercicio5/", ControllerExercicio.Pot)
router.post("/exercicio6/", ControllerExercicio.Rad)


module.exports = router;