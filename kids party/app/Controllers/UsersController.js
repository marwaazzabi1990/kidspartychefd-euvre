const Users = require("../Models/UserModel");
const express = require("express");
var router = express.Router();
//cryptage de password
const bcrypt = require("bcryptjs");
// creation de token
const jwt = require("jsonwebtoken");

// get all user
module.exports = {
  listallusers: async (req, res) => {
    const user = await Users.find();
    // .then(event => res.send(event))
    // .catch(err => res.status(400).json(err))
    // res.send("ali fpu9 chojra")
    res.json(user);
  },
  postUser: async (req, res) => {
    const newUser = new Users(req.body);
    //hashage de password
    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(req.body.password, salt);

    newUser
      .save()
      .then((data) => {
        res.send({ msg: "accepter" });
      })
      .catch((err) => {
        res.send({ msg: "refuser" }), console.log(err);
      });
  },
  updateUser: (req, res) => {
    // console.log(`${req.body} updated`)
    Users.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        () => res.json(req.body);
        console.log(req.body);
      })
      .catch((err) => console.log(err))
      .then(() => res.json("user updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  deleteUser: (req, res) => {
    console.log(`${req.body}deleted`);
    Users.findByIdAndDelete(req.params.id)
      .then(res.json("delete user"))
      .catch((err) => console.log(err));
  },
  //verif user exist
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await Users.findOne({ email });

      if (!user) {
        return res.status(400).send({ msg: "Invalid email or password." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Invalid email or password." });
      }
      //genration token
      const token = user.generateAuthToken();
      res.json({ token });
      //  res.json(user)
    } catch (error) {
      res.status(500).send("Server error");
    }
  },

  //methode de verification de user avec token si exist return ses vrai données

  getProfil: async (req, res) => {
    const token = req.header("token");

    if (!token) {
      return res.status(401).json("token inexiste, authorization réfusé");
    }
    try {
      const decoded = jwt.decode(token, "privateKey");

      req.user = decoded;

      const user = await Users.findOne({ _id: req.user._id }).select(
        "-password"
      );
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },
};
