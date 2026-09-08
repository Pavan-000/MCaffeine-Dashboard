const dashboardService =
  require("../services/dashboard.service");

class DashboardController {

  async getDashboard(req, res) {

    try {

      const result =
        await dashboardService
          .getDashboard();

      res.json(result);

    } catch(error) {

      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports =
  new DashboardController();