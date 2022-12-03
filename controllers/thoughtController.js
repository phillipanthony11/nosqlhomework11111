const Thought = require("../models/Thought");
module.exports = {
  getThought(req, res) {
    Thought.find().then((thoughts) => {
      res.json(thoughts);
    });
  },
  getSingleThought(req, res) {
    User.findbyId(req.params.id).then((user) => {
      res.json(Thought.findbyId);
    });
  },
};
