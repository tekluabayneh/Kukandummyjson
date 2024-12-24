const express = require("express");
const Api_and_user_Route = express.Router();
const { register, login } = require("./controller");

Api_and_user_Route.post("/login", login);
Api_and_user_Route.post("/register", register);

module.exports = Api_and_user_Route;

// http://localhost:8000/user_apikey/register  

// http://localhost:8000/user_apikey/login