const express = require("express");
const router = express.Router();

const RservationsController = require("../Models/RservationModel");

const {
  listallrservations,
  postRservation,
  updateRservation,
  deleteRservation,
  getreservationbyeventid,
  getreservationbyuserid,
} = require("../Controllers/RservationControllers");

// get All rservation
router.get("/getallrservations", listallrservations);
// get allrservation of event
router.get("/getreservationbyeventid/:id", getreservationbyeventid);
// get all rservation  of user
router.get("/getreservationbyuserid/:id", getreservationbyuserid);
// Add reservation
router.post("/addrservation", postRservation);

// Update event
router.put("/updatrservation/:id", updateRservation);
//Delete event
router.delete("/deleterservations/:id", deleteRservation);

module.exports = router;
