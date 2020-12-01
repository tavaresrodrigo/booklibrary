// Configuring the business logic for Users
const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
// Creating user
exports.create = (req, res) => {
  // Validating the required fields
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.status(400).send({
      message: "Name, e-mail and password are required fields.",
    });
  }
  // Create user
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone,
    image: req.body.image,
    isActive: req.body.isActive,
    userType: req.body.userType,
  });
  // Save user to Mongo
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while creating the User.",
      });
    });
};
// Find all users
exports.findAll = (req, res) => {
  User.find()
    .sort({ name: -1 })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while finding all users",
      });
    });
};
// Find user by ID
exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id: " + req.params.id,
        });
      }
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id: " + req.params.id,
      });
    });
};

// Deleting the user by id
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id: " + req.params.id,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete user ",
      });
    });
};

// Update the user by ID
exports.UpdateUser = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    res.status(400).send({
      message: "Name, e-mail and password are required fields.",
    });
  }
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "Error while updating the post",
      });
    });
};