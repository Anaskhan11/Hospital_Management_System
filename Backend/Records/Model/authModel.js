import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const authModelSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email"],
    regex: true,
  },
  password: {
    type: String,
    require: [true, "Please Enter Your Password"],
    minLength: [8, "password must be 8 Character"],
    select: false,
  },
  userType: String,
  userId: String,
});

authModelSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

authModelSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECERT, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

authModelSchema.methods.comparePassword = async function (enteredPassword) {
  // console.log(await bcrypt.hash(enteredPassword, 10));
  // console.log(enteredPassword);
  // console.log(this.password);
  return await bcrypt.compare(enteredPassword, this.password);
};

const auth = mongoose.model("auth", authModelSchema);
export default auth;
