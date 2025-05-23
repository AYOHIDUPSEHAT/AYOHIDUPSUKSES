const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const investmentRoutes = require('./routes/investment');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/investment', investmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
