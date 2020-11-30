// Configuring the business logic for Books
const Book = require("../models/book_model");
const bcrypt = require("bcryptjs");
// Creating books
exports.create = (req, res) => {
  // Validating the required fields
  if (!req.body.title || !req.body.isbn || !req.body.author || !req.body.data_published) {
    return res.status(400).send({
      message: "Title, isbn, author and year of publication are required fields.",
    });
  }
  // Create book
  const book = new Book({
    title: req.body.title,
    isbn: req.body.isbn,
    author: req.body.author,
    data_published: req.body.data_published,
  });
  // Save books to Mongo
  book
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while creating the Book.",
      });
    });
};
// Find all books
exports.findAll = (req, res) => {
  Book.find()
    .sort({ name: -1 })
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while finding books",
      });
    });
};
// Find book by ID
exports.findOne = (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id: " + req.params.id,
        });
      }
      res.status(200).send(book);
      console.log(book);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving book with id: " + req.params.id,
      });
    });
};

// Deleting book by id
exports.delete = (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id: " + req.params.id,
        });
      }
      res.send({ message: "Book deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete book ",
      });
    });
};

// Update the book by ID
exports.UpdateBook = (req, res) => {
  if (!req.body.title || !req.body.isbn || !req.body.author || !req.body.data_published) {
    res.status(400).send({
      message: "Title, isbn, author and year of publication are required fields.",
    });
  }
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "No book found with id: "+ req.params.id,
        });
      }
      res.status(200).send(book);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "Error while updating book",
      });
    });
};