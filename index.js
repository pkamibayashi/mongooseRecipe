import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./dbconfig/db.config.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

app.listen(Number(process.env.PORT), () => {
  console.log(`server running at port ${process.env.PORT}`);
});
