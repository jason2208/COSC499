const fs = require("fs");
const db = require("../models");
const Image = db.image;
const uploadFiles = async (req, res) => {
  try {

    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    if (!req.body.uid) {
        res.status(400).send({
          message: "Field 'uid' is required to upload a profile image!"
        });
        return;
      }
      if (!req.body.type) {
        res.status(400).send({
          message: "Field 'type' is required to upload a profile image!"
        });
        return;
      }
    var type =  req.body.type;
    Image.create({
      uid: req.body.uid, 
      type: req.file.mimetype,
      name: (req.body.type +Date.now() +  req.file.originalname),
      data: fs.readFileSync(
        __basedir + "/app/resources/uploads/" + req.file.filename
      ),
    }).then(
          (image) => {
      fs.writeFileSync(
        __basedir + "/app/resources/tmp/" + image.name,
        image.data
      );
      console.log("Uid Added.");
      return res.send(`Uid added to the database.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
module.exports = {
  uploadFiles,
};