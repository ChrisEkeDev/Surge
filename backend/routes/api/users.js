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

// Edit User
const valiateEditUser = [
    check('firstName').optional().exists({ checkFalsy: true }).withMessage('Please provide a first name.'),
    check('lastName').optional().exists({ checkFalsy: true }).withMessage('Please provide a last name.'),
    check('email').optional().exists({ checkFalsy: true }).isEmail().withMessage('Please provide a valid email.'),
    check('password').optional().exists({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
]

router.patch('/:userId', requireAuth, valiateEditUser, async(req, res) => {
    const auth = req.user;
    const { userId } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({
            status: 404,
            message: 'User not found',
            data: null
        })
    }
    if (auth.id === user.id) {
        await user.set({
            firstName: firstName ? firstName : user.firstName,
            lastName: lastName ? lastName : user.lastName,
            email: email ? email : user.email,
            password: password ? bcrypt.hashSync(password) : user.password,
        })
        await user.save();
        const safeUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
        return res.status(200).json({
            status: 200,
            message: 'User updated successfully',
            data: safeUser
        })
    } else {
        return res.status(403).json({
            status: 403,
            message: 'Not authorized to complete request',
            data: null
        })
    }
})

// Delete User
router.delete('/:userId', requireAuth, async(req, res) => {
    const auth = req.user;
    const { userId } = req.params;
    const user = await User.findByPk(userId)
    if (auth.id === user.id) {
        await user.destroy();
        return res.status(200).json({
            status: 200,
            message: 'User successfully deleted',
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
