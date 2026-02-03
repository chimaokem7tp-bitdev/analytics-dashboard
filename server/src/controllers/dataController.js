// Returns mock analytics data. Replace with real DB queries later.
const getAnalyticsData = (req, res) => {
  // generate mock data: last 12 hours with random values
  const now = Date.now();
  const points = [];
  for (let i = 11; i >= 0; i--) {
    const timestamp = new Date(now - i * 60 * 60 * 1000).toISOString();
    const value = Math.round(50 + Math.random() * 150);
    points.push({ timestamp, value });
  }
  res.json(points);
};

module.exports = {
  getAnalyticsData
};
