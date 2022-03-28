const { user } = require("../models/index.js");

module.exports = app => {

  var router = require("express").Router();
  var uploadController = require("../controllers/upload");
  var upload = require("../middleware/imageHandler");
  var image = require("../controllers/image.controller.js");


  // Retrieve all users
  router.get("/", image.findAll);
  // Retrieve a single user with id
  router.get("/:uid", image.findOne);
  // Update a user with id
  router.put("/:uid", image.update);
  // Delete a user with id
  router.delete("/:uid", image.delete);
  // Delete all user
  router.delete("/", image.deleteAll);
  //upload image associated with user id 
  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  return app.use("/image", router);
};
