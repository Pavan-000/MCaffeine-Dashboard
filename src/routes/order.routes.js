const router =
  require("express").Router();

const controller =
  require("../controllers/order.controller");
const rateLimiter = require("../utils/rateLimiter");

router.post(
  "/sync",
  rateLimiter,
  controller.sync
);

module.exports = router;