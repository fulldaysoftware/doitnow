import {syncDatabase, CheckConnection} from "./services/database.service";

export async function register() {
    await CheckConnection()
    await syncDatabase()
    
}