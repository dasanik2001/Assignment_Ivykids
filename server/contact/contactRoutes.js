const express = require("express");
const { AddContact, getallContacts, deleteContact, UpdateContact } = require("./controllers");


const contactRouter = express.Router();

contactRouter.post("/contact/add", AddContact);
contactRouter.post("/contact/update", UpdateContact);

contactRouter.post("/contact/delete", deleteContact);

contactRouter.get("/contact/:uid", getallContacts);


module.exports = contactRouter;