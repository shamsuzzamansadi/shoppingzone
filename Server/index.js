import express from "express";
import consign from "consign";


const app = express();

consign()
    .include("libs/db/init.js")
    .then("models/db/config.js")
    .then("libs/configuration.js")
    .then("models/db/mongo")
    .then("models/viewmodels")
    .then("repositories")
    .then("libs/authentication.js")
    .then("libs/middlewares.js")
    .then("controllers")
    .then("libs/boot.js")
    

.then("controllers")    

.then("lib/boot.js")
    .then("websocket")
    .into(app);