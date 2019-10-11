const seed = require("./seed");
const Color = require("./model/Color");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoColors", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let done = 0;

seed.forEach(color => {
  new Color(color).save(() => {
    done++;
    if (done === seed.length) {
      mongoose.disconnect();
      console.log(`ԅ༼ ◔ ڡ ◔ ༽ง Seed planted`);
    }
  });
});
