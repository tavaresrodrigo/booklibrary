const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    title: {
      desc: "The book's title",
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    isbn: {
      desc: "Book's isbn",
      trim: true,
      type: Number,
      required: true,
      index: true,
      unique: true,
    },
    author: {
      desc: "The book's title",
      trim: true,
      type: String,
      required: true,
    },
    data_published: {
      desc: "The date of publication",
      trim: true,
      type: Date,
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Books", schema);
