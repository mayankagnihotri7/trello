const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    bio: String,
    email: {
      type: String,
      unique: true,
    },
    image: String,
    name: {
      type: String,
      minlength: 4,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 6,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.password && this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      return next();
    }
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
