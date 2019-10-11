const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  colorId: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  hexString: { type: String, required: true },
  name: { type: String, required: true }
});

const Color = mongoose.model("Color", ColorSchema);
module.exports = Color;
