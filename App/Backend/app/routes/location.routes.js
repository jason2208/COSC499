const { user } = require("../models/index.js");

module.exports = app => {

    var router = require("express").Router();
    const location = require("../controllers/location.controller.js");

    // Create a new location
    router.post("/", location.create);
    // Retrieve all locations in region
    router.get("/", location.findAll);
    // Update a location with id
    router.put("/:uid", location.update);
    // Delete a location with id
    router.delete("/:uid", location.delete);

   app.use('/location', router);
   
  };