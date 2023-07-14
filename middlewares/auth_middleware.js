const jwt = require('jsonwebtoken');

module.exports = async(req,res,next)=>{
    try {
        console.log("hello auth middleware");
        const token = await req.headers["authorization"].split(" ")[1];
        console.log("token is :",token);
        jwt.verify(token,"vishnu1001",(err,decode)=>{
            if(err){
                res.status(400).json({
                    success:false,
                    "message":"auth failed"
                })
            }
            else{
                console.log("next call given");
                req.body.userId = decode.userId;
                next();
            }
        })
    } catch (error) {
        
    }
}