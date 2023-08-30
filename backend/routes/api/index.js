const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const vehicleRouter = require('./vehicles.js')
const chargerRouter = require('./chargers.js')
const { restoreUser } = require("../../utils/auth.js");
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/vehicles', vehicleRouter);

router.use('/chargers', chargerRouter)

module.exports = router;
