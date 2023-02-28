import mongoose from "mongoose";

export async function connectDB() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connect to DB ${dbConnect.connection.name}`);
  } catch (err) {
    console.log("Something went wrong during DB connection");
    console.log(err);
  }
}
