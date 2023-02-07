const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://profilekadek2:profilekadeksucipta2@ac-vscc3o9-shard-00-00.z06hi1c.mongodb.net:27017,ac-vscc3o9-shard-00-01.z06hi1c.mongodb.net:27017,ac-vscc3o9-shard-00-02.z06hi1c.mongodb.net:27017/?ssl=true&replicaSet=atlas-ojbkws-shard-0&authSource=admin&retryWrites=true&w=majority`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;