const express = require('express')
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Vehicle, Charger } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// Get All Vehicles
router.get('/', requireAuth, async(req, res) => {
    const auth = req.user;
    if (!auth) {
       return res.status(403).json({
            status: 403,
            message: "You need to sign in to use the app",
            data: null
       })
    }
    const vehicles =await Vehicle.findAll({
        where: { userId: auth.id },
        include: [{
            as: "charger",
            model: Charger
        }]
    })
    return res.status(200).json({
        status: 200,
        message: "Vehicles retrieved successfully",
        data: vehicles
    })
})

// Add Vehicle
const validateVehicleCreate = [
    check('make').exists({ checkFalsy: true }).withMessage('Please provide a make.'),
    check('model').exists({ checkFalsy: true }).withMessage('Please provide a model.'),
    check('charger').exists({ checkFalsy: true }).withMessage('Please provide a charger type.'),
    check('year').exists({ checkFalsy: true }).withMessage('Please provide a year.'),
    handleValidationErrors
]
router.post('/', requireAuth, validateVehicleCreate, async(req, res) => {
    const auth = req.user;
    if (!auth) {

    }
    const { name, make, model, charger, year } = req.body;
    const vehicle = await Vehicle.create({
        userId: auth.id,
        name,
        chargerId: charger,
        make,
        model,
        year
    })
    return res.status(201).json({
        status: 201,
        message: 'Vehicle created successful',
        data: vehicle
    })
})

// Remove Vehicle
router.delete('/:vehicleId', requireAuth, async(req, res) => {
    const auth = req.user;
    if (!auth) {
        return res.status(403).json({
            status: 403,
            message: "You need to sign in to use the app",
            data: null
       })
    }
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findByPk(vehicleId);
    if (auth.id === vehicle.userId) {
        await vehicle.destroy()
        return res.status(200).json({
            status: 200,
            message: 'Vehicle deleted successfully',
            data: null
        })
    } else {
        return res.status(403).json({
            status: 403,
            message: 'Not authorized to complete request',
            data: null
        })
    }
})


module.exports = router;
