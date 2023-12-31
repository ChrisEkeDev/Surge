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
    check('username').exists({ checkFalsy: true }).withMessage('Please provide a username.'),
    check('password').exists({ checkFalsy: true }).withMessage('Please provide a password.'),
    handleValidationErrors
  ];

router.post("/", async(req, res, next) => {
    const { username, password } = req.body;
    const user  = await User.unscoped().findOne({
        where: { username: username }
    })

    if (!user || !bcrypt.compareSync(password, user.password.toString())) {
        const err = new Error('The provided credentials were invalid.');
        err.status = 401;
        err.title = 'Login failed.';
        return  next(err);
    }

    await setTokenCookie(res, user)

    const safeUser = {
        id: user.id,
        username: user.username,
        email: user.email
    }

    return res.status(200).json({
        status: 200,
        message: "Sign in successful.",
        data: safeUser
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
router.get("/", (req, res) => {
    const { user } = req;

    if (user) {

        const safeUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }

        return res.status(200).json({
            status: 200,
            message: "Session restored successfully",
            data: safeUser
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
