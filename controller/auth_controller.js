const user_model = require("../model/user_model");
const bycript = require('bcryptjs');

const authController = async(req,res)=>{
    try {
        const existingUser = await user_model.findOne({email:req.body.email});

        if(existingUser){
            res.status(200).send({
                success:false,
                message:"user already exists"
            })
        }
        const salt = await bycript.genSalt(10);
        const hashPass = await bycript.hash(req.body.password,salt);
        req.body.password = hashPass;
        const user = new user_model(req.body);
        await user.save()
        res.status(201).send({
            success:true,
            message:"successully added in db"
        })
    } catch (error) {
        console.log("error on login : ",error);
        res.status(500).send({
            success:false,
            message:"error in auth Api",
            error
        })

    }
}

module.exports = {authController};

