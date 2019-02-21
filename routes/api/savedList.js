const router = require("express").Router();
const savedListController = require("../../controllers/savedListController")

router.route("/test")
    .post(savedListController.test);

router.route("/populate")
    .post(savedListController.populate);

router.route('/addNew')
    .post(savedListController.addNewGame);
router.route('/getlist')
    .post(savedListController.getUserGameList);
router.route('/delete')
    .post(savedListController.deleteOneGame);
module.exports = router;