import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

export default user;
