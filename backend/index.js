require('dotenv').config();

const express = require('express');
const database = require('./src/api/database/db.config.js');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
database.mongoose.connect(database.url, {
}).then(() => {
    console.log('Connected to the database!');
}).catch(err => {
    console.log('Cannot connect to the database!', err);
});
app.get('/', (req, res) => {
    res.send({ message: 'Hello, Word!' });
})
require('./src/api/routes/routes.js')(app);
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);

});