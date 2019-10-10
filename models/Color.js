const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  colorId: Number,
  hexString: String,
  name: String
});

const Color = mongoose.model("Color", ColorSchema);
module.exports = Color;
