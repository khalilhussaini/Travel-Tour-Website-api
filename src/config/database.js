/*
this is the correct code path

import Comment from "../model/comment-model.js";
import Post from "../model/post-model.js";
import User from "../model/user-model.js";
import sequelize from './connection.js';


User.hasMany(Comment, { foreignKey: 'userId', onDelete: "CASCADE" });//foreignKey is used to name the foreign key, if you remove it userId will be named as UserId automatically, which is generated automatically by sequelize
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
};
connectToDatabase();  */


import Comment from "../model/comment-model.js";
import Post from "../model/post-model.js";
import User from "../model/user-model.js";
import Tour from "../model/tour-model.js"; // Add the Tour model import
import sequelize from './connection.js';

// Define associations between models
User.hasMany(Comment, { foreignKey: 'userId', onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Tour, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Tour, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });


// Add searchTours function to the tourRepository
const searchTours = async (destination, dates, duration, filters) => {
  // Implement your search logic here based on the provided criteria
  // Return the search results
};

// Export the searchTours function
export const tourRepository = {
  searchTours,
};

// Connect to the database and sync models
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();
