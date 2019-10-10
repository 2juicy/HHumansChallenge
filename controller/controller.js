module.exports = app => {
  const db = require("../model");

  app.get("/api/colors", (req, res) => {
    db.Color.find({}).then(results => {
      res.json(results);
    });
  });
}; //end of export
