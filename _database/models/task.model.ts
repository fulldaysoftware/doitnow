import { DataTypes } from "sequelize";
import sequelize from "../db";

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  ownerId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  parentTaskId: {
    type: DataTypes.UUID,
    allowNull: true,
  },

  isParent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  duedate: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  priority: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'tasks',
  timestamps: true,
  
});

export default Task
