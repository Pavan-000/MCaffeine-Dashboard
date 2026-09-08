class FlipkartAdapter {
  transform(order) {
    return {
      external_order_id: order.id,

      product_id: order.productId,

      product_name: order.title,

      category: order.productType,

      sub_category: order.subType,

      platform: "Flipkart",

      quantity: order.quantity || 1,

      amount: order.amount,

      order_date: order.date,

      raw_payload: order
    };
  }
}

module.exports = FlipkartAdapter;


// Flipkart return this format
// {
//   "id": "FLP001",
//   "productId": "MCF001",
//   "title": "Coffee Face Wash",
//   "productType": "Skincare",
//   "subType": "Face Care",
//   "amount": 499,
//   "quantity": 2,
//   "date": "2026-09-01"
// }