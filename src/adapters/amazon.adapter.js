class AmazonAdapter {
  transform(order) {
    return {
      external_order_id: order.order_id,

      product_id: order.sku,

      product_name: order.product_name,

      category: order.category,

      sub_category: order.sub_category,

      platform: "Amazon",

      quantity: order.qty || 1,

      amount: order.sales,

      order_date: order.ordered_at,

      raw_payload: order
    };
  }
}

module.exports = AmazonAdapter;


// the data we are getting from the Amazon

// {
//   "order_id": "AMZ001",
//   "sku": "MCF001",
//   "product_name": "Coffee Face Wash",
//   "category": "Skincare",
//   "sub_category": "Face Care",
//   "sales": 499,
//   "qty": 2,
//   "ordered_at": "2026-09-01"
// }