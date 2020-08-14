const mongoose = require('mongoose');

const marwa = mongoose.connect("mongodb+srv://marwa:marwa@cluster0.6wcgm.mongodb.net/Kidsparty?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongo atlas db ..."))
    .catch(err => console.error("unable to connect to mongo db ", err));
module.exports = marwa 