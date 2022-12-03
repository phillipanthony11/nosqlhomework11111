const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  addThought,
} = require("../../controllers/thoughtController");
router.route("/").get(getThought).post(addThought);
router.route("/:id").get(getSingleThought);

module.exports = router;
