const express = require("express");

const app = express();
const mangoose = require("mongoose");
const mon = require("./app/Models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
// require('dotenv').config();5.4k(gzipped:2.2k)
var nodemailer = require("nodemailer");

//upload image
const multer = require("multer");
const path = require("path");

/*upload image*/
app.use(express.static("./public"));

app.get("/", (req, res) => res.send("index"));
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undifind");
      }
    }
  });
});

//importing route Event
var Event = require("./app/Routes/EventsRouter");
var User = require("./app/Routes/UserRouter");
var Categorie = require("./app/Routes/CategorieRoutes");
var Rservation = require("./app/Routes/RservationRoutes");
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use routers
app.use("/event", Event);
app.use("/user", User);
app.use("/categorie", Categorie);
app.use("/reservation", Rservation);
app.use(express.json());

//const db = require("./app/models");

/*nodemailer*/
app.post("/email", (req, res) => {
  console.log("zzzzz", req.body);
  nodemailer.createTestAccount((err, acount) => {
    const htmlEmail = `
      <h3> contact detail</h3>
      <ul>
      <li>NAME:${req.body.name}</li>
      <li>email:${req.body.email}</li>
      
      </ul>
      <h3>message:${req.body.message}</h3>
      `;
    let trasporteur = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "marwaazzabisimplon@gmail.com", // generated ethereal user
        pass: "marwazied123", // generated ethereal password
      },
    });
    let mailOptions = {
      from: req.body.email,
      to: "marwaazzabisimplon@gmail.com ",
      Subject: "new message",
      text: req.body.message,
      html: htmlEmail,
    };
    trasporteur.sendMail(mailOptions, (req, res) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log("message bien envoyer");
      }
    });
  });
});

/* */

app.listen(8080, () => {
  console.log("server run");
});
