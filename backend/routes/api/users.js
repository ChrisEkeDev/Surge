const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Sign Up
const validateSignUp = [
    check('username').exists({ checkFalsy: true }).withMessage('Please provide a username.'),
    check('email').exists({ checkFalsy: true }).isEmail().withMessage('Please provide a valid email.'),
    check('password').exists({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Password must be 6 characters or more.'),
    check('confirmPassword').exists({ checkFalsy: true }).custom(async (password, { req }) => {
        console.log( req.body.confirmPassword, req.body.password)
        if (req.body.password !== req.body.confirmPassword) throw new Error("Passwords must match.")
    }),
    handleValidationErrors
];

router.post('/', validateSignUp, async(req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    const hashPass = bcrypt.hashSync(password);
    if (password === confirmPassword) {
        const user = await User.create({
            username, email, password: hashPass
        })

        await setTokenCookie(res, user);

        const safeUser = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        return res.status(200).json({
            status: 200,
            message: "Sign up successful",
            data: safeUser,
        })
    } else {
        return res.status(404).json({
            status: 401,
            message: 'Passwords dont match',
            data: null
        })
    }




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
    if (!auth) {
        return res.status(403).json({
            status: 403,
            message: "You need to sign in to use the app",
            data: null
       })
    }
    const { userId } = req.params;
    const { username, email, password } = req.body;
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
            username: username ? username : user.username,
            email: email ? email : user.email,
            password: password ? bcrypt.hashSync(password) : user.password,
        })
        await user.save();
        const safeUser = {
            id: user.id,
            username: user.username,
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
    if (!auth) {
        return res.status(403).json({
            status: 403,
            message: "You need to sign in to use the app",
            data: null
       })
    }
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
