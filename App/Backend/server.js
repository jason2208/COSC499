const express = require("express");
const cors = require("cors");
const app = express();
global.__basedir = __dirname;
const db = require("./app/models");


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

var corsOptions = {
  origin: "http://localhost:8080"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to WWN!" });
});
app.use(express.static('public/imgs'))

require("./app/routes/image.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/social.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
