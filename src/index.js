const express = require("express");
require("dotenv").config();
const connect  = require("./configs/db");
const dataController = require("./controller/data.controller");
const cors = require("cors");
const port = process.env.PORT || 2333;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/data",dataController);

app.listen(port,async ()=>{
    try{
        await connect();
        console.log(process.env.PORT);
    }catch(err){
        console.log(err);
    }
})