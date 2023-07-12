const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    role:{
        type:String,
        required:[true,"role is required"],
        enum:['admin','organization','user','hospital']
    },
    name:{
        type:String,
        required:function(){
            if(this.role==='user' || this.role==='admin'){
                return true;
            }
            else{
                return false;
            }
        }
    },
    organizationName:function(){
        if(this.role==='organization'){
            return true;
        }
        return false;
    },
    hospitalName:function(){
        if(this.role==='hospital'){
            return true;
        }
        return false;
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    website:{
        type:String
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    }

},{timestamps:true})

module.exports = mongoose.model("users",userSchema);