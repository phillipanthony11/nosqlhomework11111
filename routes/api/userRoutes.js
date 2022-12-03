const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  addUser,
} = require("../../controllers/userController");
router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getSingleUser);

module.exports = router;
