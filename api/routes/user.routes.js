
const express = require('express');

const router = express.Router();

router.get('/signin', function (req, res, next) {
    console.log("Router Working");
    res.send("sign in router");
})

module.exports=router;