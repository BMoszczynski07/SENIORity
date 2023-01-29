import mongoose from "mongoose";

const { BACKEND_URL } = process.env;

//? Tutaj masz opisany model Usera w bazie danych MongoDB
const UserSchema = new mongoose.Schema({
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
  },
  pass: {
    type: String,
    required: true,
  },
  since: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
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
    type: Array[String],
    required: true,
    default: [],
  },
  birthDate: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
});

export default mongoose.Model("User", UserSchema, "Users");
