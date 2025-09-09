const db = require('../config/database');

// Create
const createRoom = async ({ building_number, room_number, building_name, projector }) => {
  const [result] = await db.query(
    'INSERT INTO rooms (building_number, room_number, building_name, projector) VALUES (?, ?, ?, ?)',
    [building_number, room_number, building_name, projector]
  );
  return result.insertId;
};

// Read all
const getAllRooms = async () => {
  const [rows] = await db.query('SELECT * FROM rooms');
  return rows;
};

// Read by ID
const getRoomById = async (id) => {
  const [rows] = await db.query('SELECT * FROM rooms WHERE id = ?', [id]);
  return rows[0];
};

// Update
const updateRoom = async (id, { building_number, room_number, building_name, projector }) => {
  await db.query(
    'UPDATE rooms SET building_number = ?, room_number = ?, building_name = ?, projector = ? WHERE id = ?',
    [building_number, room_number, building_name, projector, id]
  );
};

// Delete
const deleteRoom = async (id) => {
  await db.query('DELETE FROM rooms WHERE id = ?', [id]);
};

module.exports = { createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom };
