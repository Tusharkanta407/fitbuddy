const client = require('../config/twilioClient');

exports.sendReminder = async (req, res) => {
  try {
    const { phone, date, time } = req.body;

    const message = await client.messages.create({
      from: 'whatsapp:+14155238886',
      contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e',
      contentVariables: JSON.stringify({
        "1": date,
        "2": time
      }),
      to: `whatsapp:${phone}`
    });

    res.status(200).json({ sid: message.sid, status: 'sent' });
  } catch (err) {
    console.error('❌ Twilio send error:', err);
    res.status(500).json({ error: 'Failed to send WhatsApp message' });
  }
};
