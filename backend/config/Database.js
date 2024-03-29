import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

// const db = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
//     host : process.env.DB_HOST,
//     dialect : "mysql"
// });
// const db = new Sequelize('user_db', 'root', '',{
//     host : "localhost",
//     dialect : "mysql"
// }); 

const db = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect : "mysql"
});

export default db;