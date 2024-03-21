import User from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    // console.log('register endpoint =>', req.body)
    const { name, email, password, secret } = req.body
    if (!name) return res.status(400).send({ error: 'Name is required' })
    // if (!email) return res.status(400).send({ error: 'Email is required' })
    if (!password || password.length < 6)
        return res.status(400).send({ error: 'Password is required and should exceed 5 characters' })
    if (!secret) return res.status(401).send({ error: 'Answer is required' })

    const exist = await User.findOne({ email })
    if (exist) return res.status(400).send({ error: 'User already exists.' })

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
        if (!user) return res.status(400).send('No user found')

        const match = await comparePassword(password, user.password)
        if (!match) return res.status(401).send('Invalid Password')

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' })
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
