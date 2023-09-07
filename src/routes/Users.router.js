const { getAll, create, getOne, remove, update } = require('../controllers/Users.controllers');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/")
    .get(getAll)
    .post(create);

UserRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put (update);

module.exports = UserRouter;
