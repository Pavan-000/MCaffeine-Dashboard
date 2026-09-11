const dashboardService = require("../services/dashboard.service");

const getDashboard = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const dashboard = await dashboardService.getDashboard({
      startDate,
      endDate,
    });

    res.status(200).json(dashboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch dashboard data",
    });
  }
};

module.exports = {
  getDashboard,
};