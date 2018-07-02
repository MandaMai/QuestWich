const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const questSchema = new Schema({
  name: { type: String, required: true, unique: true },
  progress: { type: Number, min: 0, max: 100, required: true },
  icon: { type: String },
  description: {type: String, required: true},
  endGoalDate: {type: Date},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  totalCampaign: {type: Number, min: 0}
}, { collection : 'quest' });
 
const Quest = mongoose.model('Quest', questSchema);
 
module.exports = Quest;