const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/lab-express-spotify";

const connectingDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Estamos conectados a la base de datos");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1); // DETIENE LA EJECUCIÓN DE MONGODB Y CIERRA SU PUERTO (CONNECTION CLOSED)
    });
};

module.exports = connectingDB;
