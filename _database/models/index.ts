import Task from "./task.model";
import User from "./user.model";

export default async function RelateModels() {    
    User.hasMany(Task, { foreignKey: 'ownerId' });
    Task.belongsTo(User, { foreignKey: 'ownerId' });
    Task.hasMany(Task, { foreignKey: 'parentTaskId', as: 'subtasks' });
    Task.belongsTo(Task, { foreignKey: 'parentTaskId', as: 'parent' });
}


