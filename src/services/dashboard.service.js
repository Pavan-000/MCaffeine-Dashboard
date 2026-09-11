const dashboardRepository = require("../repositories/order.repositories");

const getDashboard = async ({ startDate, endDate }) => {
  const orders = await dashboardRepository.getOrders(
    startDate,
    endDate
  );

  const totalSales = orders.reduce(
    (sum, order) => sum + Number(order.amount),
    0
  );

  const totalOrders = orders.length;

  const salesByPlatform = {};
  const salesByCategory = {};
  const topProducts = {};

  orders.forEach((order) => {
    salesByPlatform[order.platform] =
      (salesByPlatform[order.platform] || 0) +
      Number(order.amount);

    salesByCategory[order.category] =
      (salesByCategory[order.category] || 0) +
      Number(order.amount);

    topProducts[order.product_name] =
      (topProducts[order.product_name] || 0) +
      Number(order.amount);
  });

  return {
    totalSales,
    totalOrders,
    salesByPlatform,
    salesByCategory,
    topProducts,
  };
};

module.exports = {
  getDashboard,
};