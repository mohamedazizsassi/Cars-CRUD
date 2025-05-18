const db = require("../database/db.config");
const Car = db.cars;

// Create a new car
exports.create = (req, res) => {
    const { nom, marque, caracteristique, prix, picture } = req.body;

    // Validate required fields
    if (!nom || !marque || !caracteristique || prix === undefined) {
        return res.status(400).send({
            message: 'All fields are required.'
        });
    }

    const newCar = new Car({
        nom,
        marque,
        caracteristique,
        prix,
        picture
    });

    newCar.save()
        .then(() => {
            res.status(200).send({
                message: 'Car successfully created'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({
                message: 'An error occurred while saving the car.'
            });
        });
};

// Get all cars
exports.findAll = (req, res) => {
    Car.find({})
        .then(data => res.send(data))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'An error occurred while retrieving cars.' });
        });
};

// Delete car by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({ message: 'Car ID is required.' });
    }

    Car.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: 'Car not found.' });
            }
            res.status(200).send({ message: 'Car successfully deleted' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'An error occurred while deleting the car.' });
        });
};

// Get single car by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({ message: 'Car ID is required.' });
    }

    Car.findById(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: 'Car not found.' });
            }
            res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'An error occurred while retrieving the car.' });
        });
};

// Update car by ID
exports.update = (req, res) => {
    const id = req.params.id;
    const { nom, marque, caracteristique, prix, picture } = req.body;

    // Validate required fields
    if (!nom || !marque || !caracteristique || prix === undefined) {
        return res.status(400).send({
            message: 'All fields are required.'
        });
    }

    Car.findByIdAndUpdate(id, { nom, marque, caracteristique, prix, picture }, { new: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: 'Car not found.' });
            }
            res.status(200).send({ message: 'Car successfully updated' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'An error occurred while updating the car.' });
        });
};
