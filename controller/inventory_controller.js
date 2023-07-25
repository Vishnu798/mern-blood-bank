const inventory_model = require("../model/inventory_model");
const user_model = require("../model/user_model");

const inventoryController = async(req,res)=>{
    try {
        console.log("first");
        const {email,inventoryType} = req.body;
        console.log("here");
        const user = await user_model.findOne({email});
        console.log(user);
        console.log(inventoryType);
        if(!user){
            throw new Error("user not exist");
        }
        // if(inventoryType==='in' && user.role!=='donar'){
        //     throw new Error("not a donor account");

        // }
        if(inventoryType==='out' && user.role!=='hospital'){
            throw new Error("not a hospital");

        }
        const inventory = new inventory_model(req.body);
        await inventory.save();

        res.status(201).json({
            status:true,
            message:"new blood record added successfult"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"cannot create inventory"
        })
    }
}

const getinventoryController = async(req,res)=>{
    try {
        console.log("userId is ::::::",req.body.userId);
        const inventory = await inventory_model.find({organization:req.body.userId});
        res.status(200).json({
            success:true,
            message:"inventory data fetched successfully",
            inventory
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            message:"unable to fetch inventory data"
        })
    }
}
module.exports =  {
    inventoryController,
    getinventoryController
}