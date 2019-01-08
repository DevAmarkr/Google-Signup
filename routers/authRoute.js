const express = require('express');
const router = express.Router();
const passport= require('passport')

//auth loggin

router.get('/loggin',(req,res)=>{
  res.render('loggin')
})

router.get('/loggout',(req,res)=>{
  res.send('loggout...')
})
//This is the route that passport handle and that take the user to the google page and
//grab the code that google give us and come back with user code
router.get('/google',passport.authenticate('google',{
  scope:['profile']//what we want from google user profile or anything we want to we just pass into array as string
}))
 //This is the route where google redirect the user with profile information but we have to pass passport authentication   middleware
 // that exhange the code with profile with google
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  res.send('google send us data')
})

module.exports=router
