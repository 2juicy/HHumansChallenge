// Navigate to the /HHumansChallenge/model folder and run "node color-seeder.js" to add the seed into database
const seed = require("../model/seed");
const Color = require("./Color");

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
