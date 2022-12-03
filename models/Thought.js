const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => timeStamp,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
