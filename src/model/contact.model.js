import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

const Contact = sequelize.define('Contact', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Contact;
