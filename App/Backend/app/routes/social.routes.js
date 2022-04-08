const { user } = require("../models/index.js");

module.exports = app => {

    var router = require("express").Router();
    const social = require("../controllers/social.controller.js");

    // Create a new social for a user
    router.post("/", social.create);
    // Retrieve all socials
    router.get("/", social.findAll);
    // Update a social for a user
    router.put("/:uid", social.update);
    // Delete a social for a user
    router.delete("/", social.delete);

    app.use('/social', router);
   
  };