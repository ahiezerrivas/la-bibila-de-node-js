const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");
const { Technology } = require("../models");

mongoose.connect(MONGO_URI, { useNewUrlParser: true});

const tecnologies = []

Technology.create(tecnologies)
    .then(() => {
        console.log("Technologies Created");
        mongoose.disconnect();
    })
    .catch(console.log);