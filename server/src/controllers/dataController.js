const getAnalyticsData = (req, res) => {
  const data = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
    { name: 'Apr', users: 200 }
  ];
  res.json(data);
};

module.exports = { getAnalyticsData };
