const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Sign Up
const validateSignUp = [
    check('firstName').exists({ checkFalsy: true }).withMessage('Please provide a first name.'),
    check('lastName').exists({ checkFalsy: true }).withMessage('Please provide a last name.'),
    check('email').exists({ checkFalsy: true }).isEmail().withMessage('Please provide a valid email.'),
    check('password').exists({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.post('/', validateSignUp, async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const hashPass = bcrypt.hashSync(password);
    const user = await User.create({
        firstName, lastName, email, password: hashPass
    })

    await setTokenCookie(res, user);

    const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }

    return res.status(200).json({
        status: 200,
        message: "Sign up successful",
        data: safeUser,
    })

})

module.exports = router;
