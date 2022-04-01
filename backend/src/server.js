const app = require("../index");
require("dotenv").config();

const connect = require("./Configs/db");

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await connect();
<<<<<<< Updated upstream
    console.log("Listening to the port 8080");
=======
    console.log("Listening to the  port 8080");
>>>>>>> Stashed changes
  } catch (e) {
    console.log(e.message);
  }
});
