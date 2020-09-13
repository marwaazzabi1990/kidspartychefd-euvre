const Rservations = require("../Models/RservationModel");
const express = require("express");
var router = express.Router();

// get all event

module.exports = {
  listallrservations: async (req, res) => {
    const reservation = await Rservations.find();
    // .then(event => res.send(event))
    // .catch(err => res.status(400).json(err))
    // res.send("ali fpu9 chojra")
    res.json(event);
  },
  postRservation: (req, res) => {
    console.log(req.body);
    const newreservation = new Rservations(req.body);
    //hashage de password

    newreservation
      .save()
      .then(res.json("reservation added !"))
      .catch((err) => console.log(err));
  },
  updateRservation: (req, res) => {
    console.log(`${req.body} updated`);
    Rservations.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        () => res.json(req.body);
        console.log(req.body);
      })
      .catch((err) => console.log(err))
      .then(() => res.json("rservation updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  deleteRservation: (req, res) => {
    console.log(`${req.body}deleted`);
    Rservations.findByIdAndDelete(req.params.id)
      .then(res.json("delete rservtion"))
      .catch((err) => console.log(err));
  },
  getreservationbyeventid: (req, res) => {
    Rservations.find({ idEvent: req.params.id })
      .then((reservation) => {
        console.log(reservation);
        if (!reservation) {
          return res.send({
            message: "reservation not found",
          });
        }
        return res.json(reservation);
      })
      .catch((err) => {
        return res.status(500).send({ message: "error to recieve" });
      });
    // res.json(stringify(reservation));
  },
  getreservationbyuserid: (req, res) => {
    Rservations.find({ IdUser: req.params.id })
      .then((reservation) => {
        console.log(reservation);
        if (!reservation) {
          return res.send({
            message: "reservation not found",
          });
        }
        return res.json(reservation);
      })
      .catch((err) => {
        return res.status(500).send({ message: "error to recieve" });
      });
    // res.json(stringify(reservation));
  },
};
