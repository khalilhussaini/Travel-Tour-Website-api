const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Booking = sequelize.define('Booking', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tourType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tourProvince: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  numberOfPeople: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Booking;
