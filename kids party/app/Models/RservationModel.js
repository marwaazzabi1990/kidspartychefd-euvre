const mongoose = require("mongoose");
//Event object constructo
const ReservationShema = new mongoose.Schema({
  idEvent: { type: String, required: true },
  titreEvent: { type: String, required: true },
  IdUser: { type: String, required: true },
  EmailUser: { type: String, required: true },
  status: { type: String, required: true },
  show: { type: Boolean, required: true },
});
const Reservation = mongoose.model("Reseration", ReservationShema);
module.exports = Reservation;
