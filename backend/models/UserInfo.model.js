import mongoose from "mongoose";
const { Schema } = mongoose;

const userInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt fields
  }
);

const UserInfoModel = mongoose.model("UserInfo", userInfoSchema, "user-info");

export default UserInfoModel;
