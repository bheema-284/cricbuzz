const { mongoose } = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Cricbuzz",
  );
};

//mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Cricbuzz
