var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  part: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);
