// // const sequelize = require('../database');
// // const User = require('./user.model');
// // const Task = require('./task.model');

// // // If you want relations, define them here:
// // User.hasMany(Task, { foreignKey: 'ownerId' });
// // Task.belongsTo(User, { foreignKey: 'ownerId' });

// // // Parent/Child relationship (optional)
// // Task.hasMany(Task, { foreignKey: 'parentTaskId', as: 'subtasks' });
// // Task.belongsTo(Task, { foreignKey: 'parentTaskId', as: 'parent' });

// // module.exports = {
// //   sequelize,
// //   User,
// //   Task
// // };

// const { sequelize } = require('./models');

// async function syncDatabase() {
//   try {
//     await sequelize.sync({ alter: true }); 
//     console.log('All models synced successfully.');
//   } catch (error) {
//     console.error('Error syncing:', error);
//   }
// }

// syncDatabase();
