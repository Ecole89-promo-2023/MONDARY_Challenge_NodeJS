const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'users_email_unique'
        },
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    zip: {
        type: DataTypes.INTEGER,
    },
    city: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    }
});

module.exports = User;