const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Event object constructor

const UserShema = new mongoose.Schema({
  nom: { type: String, required: true },

  email: { type: String, required: true },
  adresse: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});
UserShema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, role: this.role }, "privateKey");
  return token;
};

const User = mongoose.model("User", UserShema);
module.exports = User;
