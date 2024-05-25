const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://kingbradley:5158@to-do-with-sahay.gkibwvz.mongodb.net/?retryWrites=true&w=majority&appName=to-do-with-sahay"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
