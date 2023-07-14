const mongoose = require('mongoose');
const db = process.env.db

const connectDb = async()=>{
    try {
        mongoose.connect("mongodb+srv://vishnu_007_user:qwertyuiop@cluster0.8gvakfn.mongodb.net/data");
        console.log("monggose connected successfully");
    } catch (error) {
        console.log("mongoose error")
    }
}

module.exports = connectDb