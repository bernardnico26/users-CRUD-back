const catchError = require('../utils/catchError');
const User = require('../models/Users');

const getAll = catchError(async (req, res) => {
  const Users = await User.findAll();
  return res.json(Users);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({ 
    first_name, last_name, email, password, birthday 
  });
  return res.status(201).json(user);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await ToDo.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update({
        first_name, last_name, email, password, birthday
    }, { where: { id }, returning: true });
    return res.json(user);
})

module.exports = {
  getAll,
  create,
  remove,
  update
}