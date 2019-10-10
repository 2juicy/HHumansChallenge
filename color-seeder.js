const seed = require("./seed");
const Color = require("./model/Color");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoColors", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const colors = [];

seed.forEach(color => {
  colors.push(new Color(color));
});

let done = 0;

colors.forEach(color => {
  color.save(() => {
    done++;
    if (done === colors.length) {
      mongoose.disconnect();
      console.log(`ԅ༼ ◔ ڡ ◔ ༽ง Seed planted`);
    }
  });
});
