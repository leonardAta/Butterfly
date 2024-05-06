import Post from '../models/post.js'
import { expressjwt } from 'express-jwt'

export const requireSignin = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1]
        }
        return null
    },
})

export const canEditDeletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params._id)
        // console.log('Post in editdelete middleware => ', post)
        if (req.auth._id != post.postedBy) {
            return res.status(400).send('Unauthorized')
        } else {
            next()
        }
    } catch (err) {
        console.log(err)
    }
}
