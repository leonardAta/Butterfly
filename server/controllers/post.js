import Post from '../models/post.js'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

// export const createPost = async (req, res) => {
//     // console.log('post => ', req.body)
//     console.log(req.body) // Check the incoming post data
//     console.log(req.user)
//     const { content, image } = req.body
//     if (!content.length) {
//         return res.json({
//             error: 'Content is required',
//         })
//     }
//     try {
//         console.log(req.user)
//         const post = new Post({ content, image, postedBy: req.user._id })
//         await post.save()
//         console.log(req.user)
//         res.json(post)
//     } catch (err) {
//         console.log(err)
//         res.sendStatus(400)
//     }
// }

export const createPost = async (req, res) => {
    console.log(req.auth) // Check if this logs undefined or a valid user object

    if (!req.auth) {
        return res.status(401).json({ error: 'User not authenticated.' })
    }

    const { content, image } = req.body
    if (!content) {
        return res.status(400).json({ error: 'Content is required' })
    }

    try {
        const post = new Post({
            content,
            image,
            postedBy: req.auth._id,
        })
        await post.save()
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).send('Error creating post')
    }
}

export const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.files.image.path)
        // console.log('uploaded image url => ', result)
        res.json({
            url: result.secure_url,
            public_id: result.public_id,
        })
    } catch (err) {
        console.log(err)
    }
}

export const postsByUser = async (req, res) => {
    try {
        // const posts = await Post.find({ postedBy: req.user?._id })
        const posts = await Post.find().populate('postedBy', '_id name image').sort({ createdAt: -1 }).limit(10)
        // console.log('posts', posts)
        res.json(posts)
    } catch (err) {
        console.log(err)
    }
}

export const userPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params._id)
        res.json(post)
    } catch (err) {
        console.log(err)
    }
}

export const updatePost = async (req, res) => {
    // console.log('post update controller => ', req.body)
    try {
        const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        })
        res.json(post)
    } catch (err) {
        console.log(err)
    }
}
