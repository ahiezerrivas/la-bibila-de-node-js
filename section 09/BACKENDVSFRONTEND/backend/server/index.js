const express = require("express");
const server = express();
cosnt cors = require("cors");
const { Technology } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async (req, res) => {
    let technologies = await Technology.find();
    console.log(technologies);
    technologies = technologies.map(technology => {
        technology.logo = `$(req.protocol)://${req.header.host}/img/${technology.logo}`;
        return technology;
    })

    return res.send({ error: false, data: technologies });
})


server.get("/api/technology/:id", async (req, res) => {
    const { id }  = req.params;
    let technology = await Technology.findById();
    technology.logo = `$(req.protocol)://${req.header.host}/img/${technology.logo}`;
        return technology;
   
    return res.send({ error: false, data: technology });
})

server.get("/api/technology/search/:name", async (req, res) => {
    const { name } = req.params;
    let technologies = await Technology.find({
        name: { $regex: new RegExp(name, "i") }
    });
   
    technologies = technologies.map(technology => {
        technology.logo = `$(req.protocol)://${req.header.host}/img/${technology.logo}`;
        return technology;
    })

    return res.send({ error: false, data: technologies });
})

module.exports = server;
