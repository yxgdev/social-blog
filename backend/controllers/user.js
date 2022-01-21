import User from "../models/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/users";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const currentUser = await User.findOne({ email });
  if (!currentUser) res.status(404).json({ message: "cant find user" });

  const isPasswordCorrect = bcrypt.compare(password, currentUser.password);

  if (!isPasswordCorrect) res.status(400).json({ message: "failed sign in" });

  const token = jwt.sign({ email: user.email, id: user._id }, "a secret");

  res.status(200).json({ user: currentUser, token });
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) res.status(400).json({ message: "user already exist" });

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  const token = jwt.sign({ email: user.email, id, id: user._id });

  res.status(200).json({ user: newUser, token });
};