import sequelize from '../config/connection.js';
import { DataTypes } from 'sequelize';


const Tour = sequelize.define('Tour', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dates: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pricing: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
}, {
  tableName: 'tours'
});

export default Tour;
