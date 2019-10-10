// Using colors.json as seed for MongoDB

module.exports = app => {
  const db = require("../models");

  app.get("/api/colors", (req, res) => {
    db.Color.find({}).then(results => {
      res.json(results);
    });
  });
}; //end of export
