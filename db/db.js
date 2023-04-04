const mongoose = require("mongoose")
require('dotenv').config()
const User = require("../models/userModel");

const connect = async () => {
    await mongoose.connect(process.env.mongo);
}

const disconnect = async () => {
    await mongoose.connection.close();
}

// obj {email: req.body.email}
const findUser = async (obj) => {
    return await User.findOne(obj);
}

const saveUser = async (user) => {
    return await user.save();
}

module.exports = { connect, disconnect, findUser, saveUser };