const User=require('../model/user');
const bcrypt=require('bcrypt');
const saltRounds = 10;
module.exports.signup=async(req,res)=>{
    try{
        console.log(req.body);
        const {name,email,password}=req.body;
        const hashpassword = bcrypt.hashSync(password,saltRounds );
        const user = new User({name,email,password:hashpassword});
        await user.save();
        res.status(200).json({message:"user added successfully"})
    }
    catch(error){
       res.status(404).json({message:error})
    }
}