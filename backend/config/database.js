const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'classroom_scheduler',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection when the app starts
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL database connected!');
    connection.release();
  } catch (error) {
    console.error('❌ MySQL connection error:', error.message);
  }
}
testConnection();

module.exports = pool;
