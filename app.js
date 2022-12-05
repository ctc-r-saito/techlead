const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
//const db = require("./app/models");

/*
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
*/

app.get("/", (req, res) => {
    res.end("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
