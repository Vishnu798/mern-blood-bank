const user_model = require("../model/user_model");
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = async(req,res)=>{
    try {
       const existingUser = await user_model.findOne({email:req.body.email});

        if(existingUser){
          return  res.status(200).send({
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

const loginController=async(req,res)=>{
    try {
        const existingUser = await user_model.findOne({email:req.body.email});


if(!existingUser){
    return res.status(404).json({
        success:"failure",
        message:"user not found"

    });
}

if(existingUser.role!=req.body.role){
    return res.status(404).json({
        success:false,
        message:"role does not match"
    })
}

    const compareUser =await bycript.compare(req.body.password,existingUser.password);
    if(!compareUser){
        return res.status(404).json({
            success:"fail",
            message:"invalid credentials"
        })
    }

    const token = jwt.sign({userId:existingUser._id},"vishnu1001",{expiresIn:'1d'})
    console.log("id is :::",existingUser._id);

    return res.status(200).json({
        success:true,
        message:"login successfuly",
        existingUser,
        token
    })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"login api failed",
            error
        })
    }

}

const currentUserController = async(req,res)=>{
    try {
        console.log("user id is : ",req.body.userId);
        const user = await user_model.findOne({_id:req.body.userId});
        console.log("current user  is:",user);
        return res.status(200).json({
            status:true,
            message:"user fetched successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"unable to fetch user",
            error
        })
    }
}

module.exports = {authController,loginController,currentUserController};

