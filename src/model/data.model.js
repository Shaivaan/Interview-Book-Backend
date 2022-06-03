const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    topic:{type:String,required:true},
    subtopic:{type:String,required:true},
    img:{type:String,required:true},
    definition:{type:Array,required:true},
    example:{type:String,required:false}
},{
    versionKey:false,
    timestamps:true
})

const Data = mongoose.model("data",dataSchema);
module.exports = Data;