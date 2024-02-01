const express = require('express');
const cors = require('cors');
const { sequelize, testConnection } = require('./models/conn');
const categoryRoute = require('./routes/categoryRoute');

const app = express();
app.use(cors());
const PORT = 8080;

app.use(express.json())

// test connection
testConnection();

// serve client
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

// categories route
app.use('/api/categories', categoryRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));