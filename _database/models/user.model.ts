import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  }

}, {
  tableName: 'users',
  timestamps: true, // createdAt, updatedAt
});

export default User