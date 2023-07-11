const testController = (req,res)=>{
    res.status(200).send({
        mesaage:"hello there",
        status:true
    })
}

module.exports = {testController};