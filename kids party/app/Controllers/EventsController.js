const Events = require("../Models/EventModel");
const express = require("express");
var router = express.Router();

// get all event

module.exports = {
  listallevents: async (req, res) => {
    const event = await Events.find();
    // .then(event => res.send(event))
    // .catch(err => res.status(400).json(err))
    // res.send("ali fpu9 chojra")
    res.json(event);
  },

  getbyeventid: (req, res) => {
    console.log("éss", req.params.id);
    Events.findById(req.params.id)
      .then((event) => {
        console.log(event);
        if (!event) {
          return res.send({
            message: "event not found",
          });
        }
        return res.json(event);
      })
      .catch((err) => {
        return res.status(500).send({ message: "error to recieve" });
      });
    // res.json(stringify(reservation));
  },
  /****************add event  */
  postEvent: (req, res) => {
    console.log(req.body);
    const event = new Events(req.body);
    event
      .save()
      .then((data) => {
        res.send({ msg: "event ajouter" });
      })
      .catch((err) => {
        res.send({ msg: "verfier l'evenement" }), console.log(err);
      });
  },
  updateEvent: (req, res) => {
    // console.log(`${req.body} updated`)
    Events.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        res.send({ msg: "event modier!" });
      })
      .catch((err) => console.log(err))
      .then((data) => {
        res.send({ msg: "event modier!" });
      })
      .catch((err) => res.status(400).json("Error: " + err));
  },
  deleteEvent: (req, res) => {
    console.log(`${req.body}deleted`);
    Events.findByIdAndDelete(req.params.id)
      .then(() => res.send("delete event"))
      .catch((err) => console.log(err));
  },
};
