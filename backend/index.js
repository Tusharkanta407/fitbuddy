require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./Routes/messageRoutes');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', messageRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
