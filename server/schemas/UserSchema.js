import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dateSchema from "./DateSchema.js";

const { BACKEND_URL } = process.env;

//? Tutaj masz opisany model Usera w bazie danych MongoDB
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    default: `${BACKEND_URL}/assets/guest.jpg`,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  since: [dateSchema],
  comments: {
    type: Number,
    required: true,
    default: 0,
  },
  tutorials: {
    type: Number,
    required: true,
    default: 0,
  },
  articles: {
    type: Number,
    required: true,
    default: 0,
  },
  meetings: {
    type: Number,
    required: true,
    default: 0,
  },
  role: {
    type: Number,
    required: true,
    default: 0,
  },
  desc: {
    type: String,
    required: true,
    default: "",
  },
  favorites: {
    type: Array,
    required: true,
    default: [],
  },
  birthDate: [dateSchema],
  validationToken: {
    type: String,
    required: true,
    unique: true,
  },
  isUserVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema, "Users");
export default User;
