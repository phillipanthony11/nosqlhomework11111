const User = require("../models/User");
module.exports = {
  getUsers(req, res) {
    User.find().then((users) => {
      res.json(users);
    });
  },
  getSingleUser(req, res) {
    User.findById(req.params.id).then((user) => {
      res.json(user);
    });
  },
  addUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id).then((user) => {
      if (user) {
        Thought.deleteMany({ username: user.username });
      }
    });
  },
};
