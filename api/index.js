const express=require('express');
const port=8000;
const db=require('./config/mongoose');
const userRouter=require('./routes/user.routes');


const app=express();

app.listen(port,(err)=>{
    console.log("server start on port no: "+port);
});
app.use('/api/user',userRouter);


  
