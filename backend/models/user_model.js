const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      required: true,
      select: false,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true,
    },
    phone: {
      desc: "The users's phone number.",
      type: Number,
    },
    image: {
      data: Buffer, 
      contentType: String
    },
    isActive: {
      desc: "is Active.",
      type: Boolean,
      default: true,
      required: true,
    },
    userType: {
      desc: "user rloes.",
      trim: true,
      type: String,
      enum: ["Admin", "User"],
      default: "Admin",
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);
