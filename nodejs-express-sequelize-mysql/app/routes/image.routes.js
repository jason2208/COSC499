const { user } = require("../models/index.js");

module.exports = app => {

  var router = require("express").Router();
  var uploadController = require("../controllers/upload");
  var upload = require("../imageHandling/upload");
  var image = require("../controllers/image.controller.js");


  // Retrieve all users
  router.get("/image/", image.findAll);
  // Retrieve a single user with id
  router.get("/image/:uid", image.findOne);
  // Update a user with id
  router.put("/image/:uid", image.update);
  // Delete a user with id
  router.delete("/image/:uid", image.delete);
  // Delete all user
  router.delete("/image/", image.deleteAll);
  //upload image associated with user id 
  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  return app.use("/", router);
};
