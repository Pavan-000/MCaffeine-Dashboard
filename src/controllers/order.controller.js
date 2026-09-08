const orderService =
  require("../services/order.service");

class OrderController {

  async sync(req, res) {

    try {

      const {
        platform,
        orders
      } = req.body;

      await orderService.syncOrders(
        platform,
        orders
      );

      res.status(201).json({
        success: true
      });

    } catch(error) {

      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports =
  new OrderController();