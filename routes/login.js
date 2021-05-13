const express=require('express');


const loginRouter=express.Router();

loginRouter.get('/',(req,res)=>{
    res.render('logIn',{
        errorMsg:false,
        unameEntered:false,
        passwordEntered:false,
    });
});

module.exports=loginRouter;