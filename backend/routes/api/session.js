const express = require('express')
const router = express.Router();
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Sign In
const validateSignIn = [
    check('email').exists({ checkFalsy: true }).isEmail().notEmpty().withMessage('Please provide a valid email or username.'),
    check('password').exists({ checkFalsy: true }).withMessage('Please provide a password.'),
    handleValidationErrors
  ];

router.post("/", validateSignIn, async(req, Keres, next) => {
    const { email, password } = req.body;

    const user  = await User.findOne({
        where: { email: email }
    })

    if (!user || !bcrypt.compareSync(password, user.password.toString())) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = { email: 'The provided credentials were invalid.' };
        return  next();
    }

    await setTokenCookie(res, user)

    return res.status(200).json({
        status: 200,
        message: "Sign in successful.",
        data: user
    })
})

// Sign Out
router.delete("/", (_req, res) => {
    res.clearCookie('token');
    return res.status(200).json({
        status: 200,
        message: " Sign out successful.",
        data: null
    })
})


// Restore Session
route.get("/", (req, res) => {
    const { user } = req;
    if (user) {
        return res.status(200).json({
            status: 200,
            message: "Session restored successfully",
            data: user
        })
    } else {
        return res.status(204).json({
            status: 204,
            message: "No session found.",
            data: null
        })
    }
})
module.exports = router;
