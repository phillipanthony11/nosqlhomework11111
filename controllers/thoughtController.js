const Thought = require("../models/Thought");

module.exports = {
  getThought(req, res) {
    Thought.find().then((thoughts) => {
      res.json(thoughts);
    });
  },
  getSingleThought(req, res) {
    Thought.findbyId(req.params.id).then((thoughts) => {
      res.json(thought);
    });
  },
  addThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};
