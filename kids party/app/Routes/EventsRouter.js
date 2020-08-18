const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const EventsController = require("../Models/EventModel");

const {
  sendmail,
  listallevents,
  postEvent,
  updateEvent,
  deleteEvent,
} = require("../Controllers/EventsController");

// get All event
router.get("/getallevents", listallevents);

// Add event
router.post("/addevents", postEvent);

// Update event
router.put("/updatevents/:id", updateEvent);
//Delete event
router.delete("/deleteevnts/:id", deleteEvent);

module.exports = router;
