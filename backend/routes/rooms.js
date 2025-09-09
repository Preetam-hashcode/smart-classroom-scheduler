const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const authMiddleware = require('../middleware/authMiddleware');

// Add protected routes for create, update, delete. Anyone can view.
router.post('/', authMiddleware, roomController.create);
router.get('/', roomController.getAll);
router.get('/:id', roomController.getById);
router.put('/:id', authMiddleware, roomController.update);
router.delete('/:id', authMiddleware, roomController.remove);

module.exports = router;
