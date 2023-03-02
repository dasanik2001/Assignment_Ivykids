const express = require("express");
const { AddContact, getallContacts } = require("./controllers");


const contactRouter = express.Router();

contactRouter.post("/contact/add", AddContact);


contactRouter.get("/contact/:uid", getallContacts);


module.exports = contactRouter;