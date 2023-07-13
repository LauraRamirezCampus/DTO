import 'reflect-metadata';
import {plainToClass} from "class-transformer";
import express  from "express";
import dotenv  from "dotenv";
import {user} from "./controller/user.js";
dotenv.config();

const expressApp = express();

expressApp.use(express.json());
expressApp.get("/",(req,res)=>{
    try {
        let data=plainToClass(user,req.body);
        console.log(data);
    } catch (error) {
        res.send(error);
        
    }
    res.status(200).send(":)");
})

let config = JSON.parse(process.env.MY_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
