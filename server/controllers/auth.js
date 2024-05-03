import User from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken'
import { nanoid } from 'nanoid'

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

    const user = new User({ name, email, password: hashedPassword, secret, username: nanoid(5) })
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
    console.log(req.headers)
    console.log(req.auth)
    try {
        const user = await User.findById(req.auth._id)
        //res.json(user)
        res.json({ ok: true })
    } catch (err) {
        console.log(err)
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

export const profileUpdate = async (req, res) => {
    try {
        const data = {}
        if (req.body.username) {
            data.username = req.body.username
        }
        if (req.body.about) {
            data.about = req.body.about
        }
        if (req.body.name) {
            data.name = req.body.name
        }
        if (req.body.password) {
            if (req.body.password.length < 6) {
                return res.json({
                    error: 'Password  should be at least 6 characters long',
                })
            } else {
                data.password = await hashPassword(req.body.password)
            }
        }
        if (req.body.secret) {
            data.secret = req.body.secret
        }
        if (req.body.image) {
            data.image = req.body.image
        }
        let user = await User.findByIdAndUpdate(req.auth._id, data, { new: true })
        console.log('updated user', user)
        user.password = undefined
        user.secret = undefined
        res.json(user)
    } catch (err) {
        if (err.code == 11000) {
            return res.json({ error: 'Username already exists!' })
        }
        console.log(err)
    }
}

export const findPeople = async (req, res) => {
    try {
        const user = await User.findById(req.auth._id)
        let following = user.following
        following.push(req.auth._id)
        const people = await User.find({ _id: { $nin: following } })
            .select('-password -secret')
            .limit(10)
        res.json(people)
    } catch (err) {
        console.log(err)
    }
}

export const addFollower = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, {
            $addToSet: { followers: req.auth._id },
        })
        next()
    } catch (err) {
        console.log(err)
    }
}

export const userFollow = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.auth._id,
            {
                $addToSet: { following: req.body._id },
            },
            { new: true },
        ).select('-password -secret')
        res.json(user)
    } catch (err) {
        console.log(err)
    }
}
