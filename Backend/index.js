import App from "./App.js";
import dotenv from "dotenv";
import DatabaseConnection from "./config/DataBaseConnection.js";

dotenv.config({ path: "config/Config.env" });
DatabaseConnection();
process.on("uncaughtException", function (err) {
  console.log(err);
});


App.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
