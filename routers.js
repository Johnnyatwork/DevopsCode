// To import express library
const express = require("express");

// define a router object
let router = express.Router();

// define a GET API with path "/"
router.get("/", (request, response) => {
    response.send("Welcome to NUS Money Backend!");
  });

  // define a GET API with path "/home"
router.get("/home", (request, response) => {
    response.send("Welcome to NUS Money Backend Home !!!!");
  });

module.exports = { router };