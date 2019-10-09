const colors = require("./colors.json");

module.exports = app => {
  //   const db = require("../models");

  app.get("/api/colors", (req, res) => {
    res.json(colors);
  });
}; //end of export
