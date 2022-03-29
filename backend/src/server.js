const app = require("../index");

const connect = require("./Configs/db");

app.listen(8080, async () => {
  try {
    await connect();
    console.log("Listining to the  port 8080");
  } catch (e) {
    console.log(e.message);
  }
});
