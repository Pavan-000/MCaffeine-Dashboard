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

  async getOrders() {
    const { data, error } =
      await supabase
        .from("orders")
        .select("*");

    if (error) throw error;

    return data;
  }
}

module.exports = new OrderRepository();