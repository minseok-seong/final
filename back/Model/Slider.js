const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
  url: String,
});

const Slider = mongoose.model("Slider", SliderSchema);

module.exports = { Slider };
