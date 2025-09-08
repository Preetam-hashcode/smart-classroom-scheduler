const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const db = require('./config/database');

const app = express();

// Security & utility middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100
});
app.use('/api', limiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Test database connection endpoint (put BEFORE the 404 handler)
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT NOW() as now');
    res.json({ dbTime: rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Catch-all for unmatched routes (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
