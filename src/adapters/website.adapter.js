class WebsiteAdapter {
  transform(order) {
    return {
      external_order_id: order.id,

      product_id: order.productId,

      product_name: order.product,

      category: order.category,

      sub_category: order.subCategory,

      platform: "Website",

      quantity: order.quantity || 1,

      amount: order.revenue,

      order_date: order.createdAt,

      raw_payload: order
    };
  }
}

module.exports = WebsiteAdapter;


// Website returns
// {
//   "id": "WEB001",
//   "productId": "MCF001",
//   "product": "Coffee Face Wash",
//   "category": "Skincare",
//   "subCategory": "Face Care",
//   "revenue": 499,
//   "quantity": 2,
//   "createdAt": "2026-09-01"
// }