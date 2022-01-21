import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const currentUser = await User.findOne({ email });
  if (!currentUser) res.status(404).json({ message: "cant find user" });

  const isPasswordCorrect = await bcrypt.compare(
    password,
    currentUser.password
  );

  if (!isPasswordCorrect) res.status(400).json({ message: "failed sign in" });

  const token = jwt.sign(
    { email: currentUser.email, id: currentUser._id },
    "a secret"
  );

  res.status(200).json({ user: currentUser, token });
};

export const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) res.status(400).json({ message: "user already exist" });

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("wtf", {
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    console.log(newUser, "newUser");

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      "a secret"
    );

    res.status(200).json({ user: newUser, token });
  } catch (error) {
    console.log(error);
  }
};
