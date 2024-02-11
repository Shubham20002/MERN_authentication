const signincontroller=require("../controller/user.controller")
const express = require('express');

const router = express.Router();

router.post('/signup',signincontroller.signup);

module.exports=router;