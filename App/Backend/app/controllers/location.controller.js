const fs = require("fs");
const db = require("../models");
const Location = db.location;
const Op = db.Sequelize.Op;

const geocode = require("../middleware/geocoding");

// Create and Save a new user
exports.create = async (req, res) => {
    // Validate request

    if (!req.body) {
      res.status(400).send({
        message: "address can not be empty!"
      });
      return;
    }
    if (!req.body.uid) {
        res.status(400).send({
          message: "uid can not be empty!"
        });
        return;
      }

    let geoCoordinates = await geocode.FindByKeyWord(req,res);
    var geoLat = (JSON.parse(geoCoordinates).results[0].geometry.location.lat);
    var geoLng = (JSON.parse(geoCoordinates).results[0].geometry.location.lng);

    // Create a User
    const location = {
      uid:req.body.uid,
      address: req.body.address,
      lat: geoLat,
      lng: geoLng,
    };

    // Save Location in the database
    Location.create(location)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };


// Retrieve all Users from the database where region is  ? 
exports.findAll = (req, res) => {
  const id = req.body.uid;
 // var condition = uid ? { region: { [Op.like]: `%${uid}%` } } : null;
  Location.findAll({  where: { uid: id }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving uesers."
      });
    });
};
// Update a user by the id in the request
exports.update = (req, res) => {
  const id = req.params.uid;
  Location.update(req.body, {
    where: { uid: id }

  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.uid;
  Location.destroy({
    where: { uid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};
