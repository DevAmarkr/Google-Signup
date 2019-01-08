const mongoose = require('mongoose');//requiring mongoose
const Schema = mongoose.Schema;//property

const userSchema = new Schema({
  username:String,
  googleId:String,
})

const User = mongoose.model('user',userSchema)

module.exports = User
