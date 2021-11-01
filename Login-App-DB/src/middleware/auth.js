const jwt = require("jsonwebtoken")
const User = require("../model/user")

const auth = async (req,res,next) =>{

    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decode = jwt.verify(token,"thisissercret")
        const user = await User.findOne({_id: decode._id,'tokens.token': token}) 

        if(!user){
            throw new Error("Some thing wrong") 
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({error : 'Please authenticate!'})
    }
}

module.exports = auth