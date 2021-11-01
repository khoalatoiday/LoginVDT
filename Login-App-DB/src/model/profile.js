const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    yourname: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type:String,
        required:true,
        trim: true
    },

    idCard: {
        type: Number,
        required: true,
        trim: true
    },

    date: {
        type: Number,
        required: true,
         trim: true
    },

    image: {
        type: Buffer
    },

    frontIdCard:{
        type: Buffer
    },

    backIdCard:{
        type: Buffer
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

profileSchema.methods.getPublicInfo = async function(){
    const profile = this
    const profileObject = profile.toObject()
    delete profileObject.image;

    return profileObject
}

const Profile = mongoose.model("Profile",profileSchema)

module.exports= Profile