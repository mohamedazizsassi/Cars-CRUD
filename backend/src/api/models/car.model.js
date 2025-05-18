const { mongoose } = require("../database/db.config");

module.exports = mongoose => {
    const Schema = mongoose.Schema;

    const CarSchema = new Schema({
        nom: {
            type: String,
            required: true
        },
        marque: {
            type: String,
            required: true
        },
        caracteristique: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        picture: {
            type: String,
            required: false
        }
    }, {
        timestamps: true
    });

    CarSchema.methods.toJSON = function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    }

    const Car = mongoose.model("Car", CarSchema);
    return Car;
}
