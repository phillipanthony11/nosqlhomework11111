const router = require("express").Router();
const {
  getThought,
  GetSingleThought,
} = require("../../controllers/thoughtController");
router.route("/thoughts").get(getThought);
router.route("/thoughts/:ThoughtId");

module.exports = router;
