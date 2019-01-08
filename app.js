const express = require('express');
const app = express();
const authRouter = require('./routers/authRoute')
const passportSetup = require('./config/passport-setup')
const key = require('./config/keys.js')
const mongoose= require('mongoose')

//set up veiw engine
app.set('view engine','ejs')

//connecting to db

mongoose.connect(key.mongodb.dbURI,()=>{
  console.log('connected to db')
})

app.get('/',(req,res)=>{
  res.render('home')
})

app.use('/auth',authRouter)

app.listen(3000, ()=>{
  console.log('server is running on port',3000)
})
