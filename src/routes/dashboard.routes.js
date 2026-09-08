const router =
  require("express").Router();

const controller =
  require("../controllers/dashboard.controller");
const rateLimiter = require("../utils/rateLimiter");

router.get(
  "/",
  rateLimiter,
  controller.getDashboard
);

module.exports = router;