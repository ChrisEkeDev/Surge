const express = require('express')
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Charger } = require('../../db/models');

// Get All Charger Types
router.get('/', requireAuth, async(req, res) => {
    const chargers = await Charger.findAll();
    return res.status(200).json({
        status: 200,
        message: 'Charges retrieved successfully',
        data: chargers
    })
})



module.exports = router;
