const router =
  require("express").Router();

const controller =
  require("../controllers/order.controller");

router.post(
  "/sync",
  controller.sync
);

module.exports = router;