import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const DatabaseConnection = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database Connected Sucessfully`);
    });
};

export default DatabaseConnection;
