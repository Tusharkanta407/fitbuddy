const express = require('express');
const router = express.Router();
const { sendReminder } = require('../Controllers/messageController');

router.post('/send-reminder', sendReminder);

module.exports = router;
