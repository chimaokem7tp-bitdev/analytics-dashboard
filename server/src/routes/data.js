const express = require('express');
const router = express.Router();
const { getAnalyticsData } = require('../controllers/dataController');

router.get('/', getAnalyticsData);

module.exports = router;
