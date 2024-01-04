import express from "express"
import cors from "cors"
import db from "./config/Database.js";
import router from "./route/routes.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();

// (async()=>{
//     await db.sync();
// })();

app.use(cors({
    origin : '*',
    credentials : true
}))


app.use(express.json())

app.use(router)

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
});