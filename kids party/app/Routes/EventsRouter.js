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
  getbyeventid,
} = require("../Controllers/EventsController");

// get All event
router.get("/getallevents", listallevents);
//get one event
router.get("/findeventbyid/:id", getbyeventid);

// Add event
router.post("/addevents", postEvent);

// Update event
router.put("/updatevents/:id", updateEvent);
//Delete event
router.delete("/deleteevnts/:id", deleteEvent);

module.exports = router;
