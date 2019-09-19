const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// This represents the plan
const eventSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    require: true
  },

  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// this represents the actual blueprint, at least two args
module.exports = mongoose.model("Event", eventSchema);
