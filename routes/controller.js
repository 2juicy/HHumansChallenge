module.exports = app => {
  const db = require("../models");

  app.get("/api/colors", (req, res) => {
    db.Color.find({}).then(function(results) {
      res.json(results);
    });
  });
}; //end of export
