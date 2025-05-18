module.exports = app => {
    const router = require('express').Router();
    const carController = require('../controllers/car.controller');
    router.post('/cars', carController.create)
    router.get('/cars', carController.findAll);
    router.delete('/cars/:id', carController.delete);
    router.get('/cars/:id', carController.findOne);
    router.put('/cars/:id', carController.update);
    app.use('/api/', router);
}