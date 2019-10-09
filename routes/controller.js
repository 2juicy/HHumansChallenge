const colors = require("./colors.json");

module.exports = app => {
  // Import colors.json into mongoDB to use database
  //   const db = require("../models");

  app.get("/api/colors", (req, res) => {
    res.json(colors);
  });
}; //end of export
