import mongoose from "mongoose";

const connectDB = async (url, username, password, callback) => {
  // Mongo DB Connections
  mongoose
    .connect(
      url.replace("<USERNAME>", username).replace("<PASSWORD>", password)
    )
    .catch((error) => {
      console.log("Error in DB connection: " + error);
    });

  callback();
};

export default connectDB;
