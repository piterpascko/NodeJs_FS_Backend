const express = require("express");
const User = require("../models/userModel");
const { findUser, saveUser } = require("../db/db");
const crypto = require('crypto')

const router = express.Router();

router.post("/register", (req, res, next) => {
    // findUser
    // if the user exist 
    // return response that says already exist
    // else 
    // encrypt password 
    // set the password with the encrupted password 
    // save the user to the db
});

router.post("/login", (req, res, next) => {
    // findUser
    // check encrypted passwords
});

module.exports = router;