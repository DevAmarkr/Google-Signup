const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20')
const key = require('./keys')
const User = require('../models/usermodel')

passport.serializeUser((user,done)=>{ // storing user id in cookie
  done(null,user.id);//calling done method
})

passport.deserializeUser((user.id,done)=>{ //cookie give  us user id and on that basis we check into our database
  User.findById(id).then((user)=>{  // send back the user data
    done(null,user)
  });
})

passport.use(new GoogleStrategy({
  //option for the GoogleStrategy
  callbackURL:'/auth/google/redirect',
  clientID:key.google.clientID,
  clientSecret:key.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
  //before google redirect to redirect router this call back function call
  // console.log(profile)//do console here with profile to see what google has given us
  User.findOne({googleId:profile.id}).then((currentUser)=>{
    if(currentUser){
      console.log(`user is already present in database hare it his profile data ${currentUser}`)
      done(null,currentUser)
    }else{
      new User({
        username:profile.displayName,
        googleId:profile.id
      }).save().then(newUser=>{
        console.log(`successfully user signup with ${newUser}`)
        done(null,newUser)
      })
    }
  })

})
)
