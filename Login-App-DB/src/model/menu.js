const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    level:{
        type: Number,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required:true,
        trim: true,
    }
})

const Menu = mongoose.model("Menu", menuSchema)

module.exports = Menu