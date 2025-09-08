const db = require('../config/database');

const findByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const createUser = async (user) => {
  const { name, email, password_hash, role } = user;
  const [result] = await db.query(
    'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
    [name, email, password_hash, role || 'student']
  );
  return result.insertId;
};

module.exports = {
  findByEmail,
  createUser,
};
