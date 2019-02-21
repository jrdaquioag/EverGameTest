const router = require("express").Router();
const userController = require("../../controllers/userController");


// "/api/user"
router.route("/")
    .post(userController.getUserName);


module.exports = router;
