import { Schema } from "mongoose";

const dateSchema = new Schema({
  day: {
    type: Number,
    required: true,
    default: 1,
  },
  month: {
    type: Number,
    required: true,
    default: 1,
  },
  year: {
    type: Number,
    required: true,
    default: 1970,
  },
});

export default dateSchema;
