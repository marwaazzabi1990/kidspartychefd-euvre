const express = require("express");
const router = express.Router();

const UserController = require('../Models/UserModel')

const { listallusers, postUser, updateUser, deleteUser, signIn, getProfil } = require("../Controllers/UsersController");

// get All event
router.get("/getallusers", listallusers);

// Add event
router.post("/adduser", postUser);

// Update event
router.put("/updatusers/:id", updateUser);
//Delete event
router.delete("/deletuser/:id", deleteUser);
router.post("/SingIn", signIn),
    router.get("/getuserconnecte", getProfil)

module.exports = router;
