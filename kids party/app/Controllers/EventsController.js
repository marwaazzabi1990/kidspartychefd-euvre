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
  postEvent: (req, res) => {
    console.log(req.body);
    const newEvent = new Events(req.body);
    newEvent
      .save()
      .then(res.json("event added !"))
      .catch((err) => console.log(err));
  },
  updateEvent: (req, res) => {
    // console.log(`${req.body} updated`)
    Events.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        () => res.json(req.body);
        console.log(req.body);
      })
      .catch((err) => console.log(err))
      .then(() => res.json("event updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  deleteEvent: (req, res) => {
    console.log(`${req.body}deleted`);
    Events.findByIdAndDelete(req.params.id)
      .then(res.json("delete event"))
      .catch((err) => console.log(err));
  },
};
