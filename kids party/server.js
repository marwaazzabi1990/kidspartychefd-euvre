const express = require('express');

const app = express();
const mangoose = require('mongoose');
const mon = require('./app/Models/db')
const bodyParser = require("body-parser");
const cors = require("cors");



//upload image
const multer = require('multer');
const path = require('path')

/*upload image*/
app.use(express.static('./public'));


app.get('/', (req, res) => res.send('index'));
// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
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
        cb('Error: Images Only!');
    }
}

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');

app.post('/image', (req, res) => {
    upload(req, res, (err) => {
        console.log("immage", req.file)
        if (err) {
            res.send({ msg: err });
        } else {
            if (req.file == undefined) {
                res.send({ msg: 'Error: No File Selected!' });
            } else {
                if (req.file)
                    res.send(req.file.filename)
                else
                    res.send("file undifind")
            }
        }

    });
});






//importing route Event
var Event = require("./app/Routes/EventsRouter");
var User = require("./app/Routes/UserRouter")
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use routers
app.use("/event", Event);
app.use("/user", User);
app.use(express.json())


//const db = require("./app/models");


app.listen(8080, () => {
    console.log('server run')

});