import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    profilePhoto:{
        type: String,
        default: ""
    },
    gender:{
        type: String,
        enum: ["Male", "Female"],
        required: true
    }
},{timestamps: true});

export const User = mongoose.model("User", userModel); //We can access this userModel as user.

// Means we can create user, delete user, update user using User