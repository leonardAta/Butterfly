import User from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    // console.log('register endpoint =>', req.body)
    const { name, email, password, secret } = req.body
    if (!name) {
        return res.json({
            error: 'Name is required.',
        })
    }
    // if (!email) return res.status(400).send({ error: 'Email is required' })
    if (!password || password.length < 6) {
        return res.json({
            error: 'Password is required and should be 6 characters long',
        })
    }
    if (!secret) {
        return res.json({
            error: 'Answer is required',
        })
    }

    const exist = await User.findOne({ email })
    if (exist) {
        return res.json({ error: 'User already exists.' })
    }

    const hashedPassword = await hashPassword(password)

    const user = new User({ name, email, password: hashedPassword, secret })
    try {
        await user.save()
        // console.log('registered user =>', user)
        return res.json({
            ok: true,
        })
    } catch (err) {
        console.log('Error in saving the user to database', err)
        return res.status(400).send('Error.Try again')
    }
}

export const login = async (req, res) => {
    console.log(req.body)
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                error: 'No user found',
            })
        }

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.json({
                error: 'Invalid Password',
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        user.password = undefined
        user.secret = undefined
        res.json({
            token,
            user,
        })
    } catch (err) {
        console.error(err)
        return res.status(400).send('Invalid token. Please log in again')
    }
}

export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        // res.json(user)
        res.json({ ok: true })
    } catch (err) {
        console.error(err)
        res.sendStatus(400)
    }
}

export const forgotPassword = async (req, res) => {
    // console.log(req.body)
    const { email, newPassword, secret } = req.body

    if (!newPassword || !newPassword < 6) {
        return res.json({
            error: 'New password must be at least 6 characters long',
        })
    }
    if (!secret) {
        return res.json({
            error: 'Secret is required.',
        })
    }
    const user = await User.findOne({ email, secret })
    if (!user) {
        return res.json({ error: 'No such user exists.' })
    }

    try {
        const hashed = await hashPassword(newPassword)
        await User.findByIdAndUpdate(user._id, { password: hashed })
        return res.json({
            success: 'Nice! You can now login with your new password',
        })
    } catch (err) {
        console.error(err)
        return res.json({
            error: 'Something wrong. Try again',
        })
    }
}
