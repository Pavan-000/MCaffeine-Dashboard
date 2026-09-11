const supabase = require("../config/supabase");

class OrderRepository {

  async saveOrders(orders) {
    const { data, error } =
      await supabase
        .from("orders")
        .insert(orders);

    if (error) throw error;

    return data;
  }

  async getOrders(startDate, endDate) {

  let query = supabase
    .from("orders")
    .select("*");

  if (startDate && endDate) {

    query = query
      .gte("order_date", startDate)
      .lte("order_date", `${endDate}T23:59:59`);

  }

  const { data, error } =
    await query;

  if (error) throw error;

  return data;
}
}

module.exports = new OrderRepository();