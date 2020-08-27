const mongoose = require("mongoose");
//Event object constructor

const CategorieShema = new mongoose.Schema({
  titre: { type: String, required: true },
  Description: { type: String, required: true },
});
const categorie = mongoose.model("categorie", CategorieShema);
module.exports = categorie;
