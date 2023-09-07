const { getAll, create, remove, update } = require('../controllers/Users.controllers');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/")
    .get(getAll)
    .post(create);

UserRouter.route("/:id")
    .delete(remove)
    .put (update);

module.exports = UserRouter;
