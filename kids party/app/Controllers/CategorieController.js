const Categories = require("../Models/CategorieModel");
const express = require("express");
var router = express.Router();

// get all event

module.exports = {
  listallCategorie: async (req, res) => {
    const categorie = await Categories.find();
    // .then(event => res.send(event))
    // .catch(err => res.status(400).json(err))
    // res.send("ali fpu9 chojra")
    res.json(categorie);
  },
  postCategorie: (req, res) => {
    console.log(req.body);
    const newCategorie = new Categories(req.body);
    newCategorie
      .save()
      .then(res.json("categorie added !"))
      .catch((err) => console.log(err));
  },
  updateCategorie: (req, res) => {
    // console.log(`${req.body} updated`)
    Categories.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        () => res.json(req.body);
        console.log(req.body);
      })
      .catch((err) => console.log(err))
      .then(() => res.json("categorie updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  deleteCategorie: (req, res) => {
    console.log(`${req.body}deleted`);
    Categories.findByIdAndDelete(req.params.id)
      .then(res.json("delete categorie"))
      .catch((err) => console.log(err));
  },
};
