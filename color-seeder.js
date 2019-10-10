const seed = require("./seed");
const Color = require("./model/Color");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoColors");

const colors = [];

seed.forEach(color => {
  colors.push(new Color(color));
});

let done = 0;

for (let i in colors) {
  colors[i].save(() => {
    done++;
    if (done === colors.length) {
      mongoose.disconnect();
    }
  });
}
