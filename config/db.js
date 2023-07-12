const mongoose = require('mongoose');
const db = process.env.db

const connectDb = async()=>{
    try {
        mongoose.connect("mongodb+srv://blood_bank:qwertyuiop@cluster0.8gvakfn.mongodb.net/myfirstPortal");
        console.log("monggose connected successfully");
    } catch (error) {
        console.log("mongoose error")
    }
}

module.exports = connectDb