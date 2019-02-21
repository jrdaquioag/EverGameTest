const router = require("express").Router();
const igdbController = require("../../controllers/igdbController");


// "/api/igdb"
// return axios.get("/api/igdb", { params: { q: "title:" + q } });
router.route("/")
  .get(igdbController.search);

// router.get("/api/igdb", igdbController.search)

module.exports = router;
