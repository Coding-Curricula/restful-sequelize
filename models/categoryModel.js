const { sequelize } = require('./conn');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});

// check if table exists or not
Category.sync({ force: false }).then(() => {
    console.log('Category table created successfully');
});

module.exports = Category;