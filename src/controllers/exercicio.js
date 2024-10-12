const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {
    Somar(req, res) {
        try {
            const resultado = ServiceExercicio.Somar(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Sub(req, res) {
        try {
            const resultado = ServiceExercicio.Sub(req.body.num3, req.body.num4);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Div(req, res) {
        try {
            const resultado = ServiceExercicio.Div(req.body.num5, req.body.num6);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Mult(req, res) {
        try {
            const resultado = ServiceExercicio.Mult(req.body.num7, req.body.num8);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Pot(req, res) {
        try {
            const resultado = ServiceExercicio.Pot(req.body.num9, req.body.num10);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Rad(req, res) {
        try {
            const resultado = ServiceExercicio.Rad(req.body.num11);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}


module.exports = new ControllerExercicio()