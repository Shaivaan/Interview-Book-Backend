require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect  = require("./configs/db");

app.use(cors());
app.use(express.json());

const dataController = require("./controller/data.controller");

const PORT = process.env.PORT || 2333;
app.use("/data",dataController);


app.listen(PORT,async ()=>{
    try{
        await connect();
        console.log(port);
        
    }catch(err){
        console.log(err);
    }
})