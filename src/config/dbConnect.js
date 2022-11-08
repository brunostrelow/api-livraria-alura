import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bstrelow:pacoca1003@cluster0.ariv7vq.mongodb.net/alura-node");

let db = mongoose.connection;

export default db
