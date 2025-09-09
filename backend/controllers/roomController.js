const Room = require('../models/room');

const create = async (req, res) => {
  try {
    const { building_number, room_number, building_name, projector } = req.body;
    if (!building_number || !room_number || !building_name || !projector) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const id = await Room.createRoom({ building_number, room_number, building_name, projector });
    res.status(201).json({ message: 'Room created', roomId: id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const rooms = await Room.getAllRooms();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getById = async (req, res) => {
  try {
    const room = await Room.getRoomById(req.params.id);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const update = async (req, res) => {
  try {
    const { building_number, room_number, building_name, projector } = req.body;
    if (!building_number || !room_number || !building_name || !projector) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    await Room.updateRoom(req.params.id, { building_number, room_number, building_name, projector });
    res.json({ message: 'Room updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const remove = async (req, res) => {
  try {
    await Room.deleteRoom(req.params.id);
    res.json({ message: 'Room deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { create, getAll, getById, update, remove };
