const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthdate: { type: Date},
  email: { type: String, required: true, unique: true },
  status: { type: String },
  biography: { type: String },
  createdDate: { type: Date },
  closedDate: { type: Date },
  picture: { type: String },
  totalProgressCompleted: { type: Number },
  totalProgressPending: { type: Number },
  skillListId: { type: String },
  traitListId: { type: String },
  lastModifiedDate: { type: Date },

}, { collection : 'user' });
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;