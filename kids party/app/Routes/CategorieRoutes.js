const express = require("express");
const router = express.Router();
//const nodemailer = require("nodemailer");

const CategorieController = require("../Models/CategorieModel");

const {
  listallCategorie,
  postCategorie,
  updateCategorie,
  deleteCategorie,
} = require("../Controllers/CategorieController");

// get All categorie
router.get("/getallcategories", listallCategorie);

// Add categorie
router.post("/addcategories", postCategorie);

// Update categorie
router.put("/updatcategorie/:id", updateCategorie);
//Delete categorie
router.delete("/deletecategorie/:id", deleteCategorie);

module.exports = router;
