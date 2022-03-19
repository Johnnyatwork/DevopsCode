// To import express library
const express = require("express");

const database = require("./data");

// define a router object
let router = express.Router();

// define a GET API with path "/"
router.get("/", (request, response) => {
    response.send("Welcome to NUS Money Backend Version 2.0 !");
  });

  // define a GET API with path "/home"
router.get("/home", (request, response) => {
    response.send("Welcome to NUS Money Backend Home !");
  });

  router.get("/users/all",(request,response)=>{
    let users = database.get_all_users();
    response.send(users);
  });

module.exports = { router };