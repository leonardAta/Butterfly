import Post from '../models/post.js'

export const createPost = async (req, res) => {
    // console.log('post => ', req.body)
    const { content } = req.body
    if (!content.length) {
        return res.json({
            error: 'Content is required',
        })
    }
    try {
        console.log(req.user)
        const post = new Post({ content, postedBy: req.user?._id })
        post.save()
        res.json(post)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}
