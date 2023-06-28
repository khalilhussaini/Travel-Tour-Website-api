

import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

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

export default Booking;

// write me a json file fot the booking model

