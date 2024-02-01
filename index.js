const express = require('express');
const { sequelize, testConnection } = require('./models/conn');
const categoryRoute = require('./routes/categoryRoute');

const app = express();
const PORT = 8080;

app.use(express.json())

// test connection
testConnection();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// categories route
app.use('/categories', categoryRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));