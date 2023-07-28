const mongoose = require("mongoose");
const inventory_model = require("../model/inventory_model");
const user_model = require("../model/user_model");

const inventoryController = async (req, res) => {
  try {
    console.log("first");
    const { email } = req.body;
    console.log("here email is : ",email);
    const user = await user_model.findOne({ email });
    console.log(user);

    if (!user) {
      throw new Error("user not exist");
    }
    // if(inventoryType==='in' && user.role!=='donar'){
    //     throw new Error("not a donor account");

    // }
    // if(inventoryType==='out' && user.role!=='hospital'){
    //     throw new Error("not a hospital");

    // }

    if (req.body.inventoryType === "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedBloodQuantity = req.body.quantity;
      const organization = new mongoose.Types.ObjectId(req.body.userId);

      //total in blood
      const totalInOfRequestedBlood = await inventory_model.aggregate([
        {
          $match: {
            organization,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("total in",totalInOfRequestedBlood);
      const totalIN = totalInOfRequestedBlood[0]?.total || 0;

      //total out blood
      const totalOutOfRequestedBlood = await inventory_model.aggregate([
        {
          $match: {
            organization,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("total in",totalInOfRequestedBlood);
      const totalOut = totalOutOfRequestedBlood[0]?.total || 0;

      const availableQuantityOfBlood = totalIN - totalOut;

      //blood quantity validation
      if (availableQuantityOfBlood < requestedBloodQuantity) {
        return res.status(404).json({
          status: false,
          message: `only ${availableQuantityOfBlood}ML blood is available`,
        });
      }
      req.body.hospital = user?._id;
    } else {

      req.body.donar = user?._id;
    }
    
    const inventory = new inventory_model(req.body);
    await inventory.save();

    res.status(201).json({
      status: true,
      message: "new blood record added successful",
    });
  } catch (error) {
    console.log("inventory error is : ", error);
    res.status(500).json({
      success: false,
      message: "cannot create inventory",
    });
  }
};

const getinventoryController = async (req, res) => {
  try {
    console.log("userId is ::::::", req.body.userId);
    const inventory = await inventory_model.find({
      organization: req.body.userId,
    });
    res.status(200).json({
      success: true,
      message: "inventory data fetched successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "unable to fetch inventory data",
    });
  }
};

const getDonarsController = async (req, res) => {
  try {
    const organization = req.body.userId;
    console.log("user is of getDonars is : ",organization);
    const donarId = await inventory_model.distinct("donar",{
        organization
    });
    console.log("donar id is ::: :: ", donarId);

    const donars = await user_model.find({_id:{$in:donarId}});
    
    return res.status(200).json({
        status:true,
        message:"donars fetched successfully",
        donars
    })
  } catch (error) {
    return res.status(501).json({
      status: false,
      message: "error in donar api",
      error,
    });
  }
};

const hospitalController = async(req,res)=>{

  try {
    console.log("inside hospitalController function")
    const organization = req.body.userId;
    console.log("user is of hospital is : ",organization);
    const hospitalId = await inventory_model.distinct('hospital',{organization});
    console.log("hospital id is : ",hospitalId);
    
    const hospitals = await user_model.find({_id:{$in:hospitalId}});
    return res.status(200).json({
      status:true,
      message:"hospital records fetched successfully",
      hospitals
    })
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      status:false,
      message:"error in get hospital data api",
      error
    })
  }
}

const organizationController = async(req,res)=>{
  try {
    const organization = req.body.userId;
    console.log("user is of getDonars is : ",organization);
    const donarId = await inventory_model.distinct("donar",{
        organization
    });
    console.log("donar id is ::: :: ", donarId);

    const organizations = await user_model.find({_id:{$in:donarId}});

     return res.status(200).json({
      status:true,
      message:"organization data fetched succesfully",
      organizations
     })
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      status:false,
      message:"error in organization api",
      error
    })
  }
}
module.exports = {
  inventoryController,
  getinventoryController,
  getDonarsController,
  hospitalController,
  organizationController
};
