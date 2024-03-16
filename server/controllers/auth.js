import User from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'

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
