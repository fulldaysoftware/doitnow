import { Sequelize } from "sequelize";
import sqlite from "sqlite3"

const sequelize = new Sequelize({dialect: 'sqlite', 
    storage: './_data/taskmanager.sqlite',
    dialectModule: sqlite
}
)

export default sequelize