import mongoose from "mongoose";

export async function Mongoose() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("MongoDB connected successfully");
      process.exit();
    });
  } catch (error) {
    console.log("Error al conectar a MongoDB: " + error);
  }
}
