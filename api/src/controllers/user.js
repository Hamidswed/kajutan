import User from "../models/User.js";
import UserServices from "../services/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });
    const user = await UserServices.createUser(newUser);
    res.json(user);
  } catch (error) {
    res.json({ message: "The email is available!" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserServices.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserServices.getUsers();
    res.json(users);
  } catch (error) {
    res.json({ message: "error" });
  }
};

export const loginWithPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await UserServices.findUserByEmail(email);
    if (!userData) {
      res.json({ message: `Can't find user ${email}` });
      return;
    }

    const passwordFromForm = req.body.password;
    const passwordFromDB = userData.password;
    const match = await bcrypt.compare(passwordFromForm, passwordFromDB);
    if (!match) {
      res.json({ message: "Email or Password is incorecct!" });
      return;
    }

    const token = jwt.sign({ email, _id: userData._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true, // Set to true for better security
      secure: process.env.NODE_ENV === "production", // Set to true for HTTPS environments
    });

    res.json({ userData, token });
  } catch (error) {
    res.json({ message: "There is an error!" });
  }
};

export const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const newUserInfo = req.body;
  try {
    const updatedUser = await UserServices.updateUserById(userId, newUserInfo);
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
};
