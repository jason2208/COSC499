const { user } = require("../models/index.js");

module.exports = app => {

    var router = require("express").Router();
    const user = require("../controllers/user.controller.js");

    // Create a new user
    router.post("/", user.create);
    // Retrieve all users
    router.get("/", user.findAll);
    // Retrieve all enabled users
    router.get("/enabled", user.findAllEnabled);
    // Retrieve a single user with id
    router.get("/:uid", user.findOne);
    // Update a user with id
    router.put("/:uid", user.update);
    // Delete a user with id
    router.delete("/:uid", user.delete);
    // Delete all user
    router.delete("/", user.deleteAll);

    app.use('/user', router);
   
  };