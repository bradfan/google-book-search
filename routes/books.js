const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/posts"
router
  .route("/")

  .post(bookController.create);

// Matches with "/api/posts/:id"
router.route("/:id").delete(bookController.remove);

module.exports = router;
