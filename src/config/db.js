import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://yanezgael576:7vnxGGtnATlPvypi@micheltarea.2hcuz7a.mongodb.net/?retryWrites=true&w=majority&appName=MIchelTarea";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};
