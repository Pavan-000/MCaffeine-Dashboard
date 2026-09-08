const repository =
  require("../repositories/order.repositories");

const AmazonAdapter =
  require("../adapters/amazon.adapter");

const FlipkartAdapter =
  require("../adapters/flipkart.adapter");

const WebsiteAdapter =
  require("../adapters/website.adapter");

class OrderService {

  getAdapter(platform) {

    switch(platform.toLowerCase()) {

      case "amazon":
        return new AmazonAdapter();

      case "flipkart":
        return new FlipkartAdapter();

      case "website":
        return new WebsiteAdapter();

      default:
        throw new Error(
          "Unsupported platform"
        );
    }
  }

  async syncOrders(platform, orders) {

    const adapter =
      this.getAdapter(platform);

    const transformed =
      orders.map(order =>
        adapter.transform(order)
      );

    return repository.saveOrders(
      transformed
    );
  }
}

module.exports =
  new OrderService();