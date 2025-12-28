const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');

// Public routes
router.post('/', submitContact);

// Admin routes (add authentication middleware in production)
router.get('/', getAllContacts);

module.exports = router;