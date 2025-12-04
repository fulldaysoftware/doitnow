import sequelize from "@/_database/db";
import RelateModels from "@/_database/models";

export async function syncDatabase() {
    console.log("Databse Sync Started")
    try {
        await RelateModels()
        await sequelize.sync({ alter: true }); 
        console.log('All models synced successfully.');
    } catch (error) {
        console.error('Error syncing:', error);
    }
    console.log("Databse Successfully Finishes")
}

export async function CheckConnection() {
    try {
        const x = await sequelize.authenticate()
        console.log("DB Authenticated Successfully")
    }
    catch(err) {
        console.log('Error happend while authenticating DB ->', err)
    }
}