const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
        inventoryType:{
            type:String,
            required:[true,"inventory type required"],
            enum:['in','out']
        },
        bloodGroup:{
            type:String,
            required:[true,"blood group is required"],
            enum:["O-","O+","AB-","AB+","A-","A+","B-","B+"]
        },
        quantity:{
            type:Number,
            required:[true,"quantity is required"]

        },
        organization:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required: [true, "organization is require"],
        },
        hospital:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:function(){
                return this.inventoryType === "out";
            }
        },
        email:{
            type:String,
            required:[true,"donar email is required"]
        },
        donar:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:function(){
                return this.inventoryType === "in";
            }
        }
},{timestamps:true});

module.exports = mongoose.model('inventory',inventorySchema);