import { createPost } from '../controllers/post.js'
import Post from '../models/post.js'

describe('Post Controller - createPost', function () {
    let req, res

    beforeEach(() => {
        spyOn(Post.prototype, 'save').and.resolveTo({
            _id: 'newPostId',
            content: 'Test content',
            postedBy: '123',
        })

        req = {
            body: { content: 'Test content' },
            auth: { _id: '123' },
        }

        res = {
            json: jasmine.createSpy('json'),
            status: jasmine.createSpy('status').and.returnValue(this),
            send: jasmine.createSpy('send'),
        }
    })

    // it('should require authentication', async () => {
    //     req.auth = null
    //     await createPost(req, res)
    //     expect(res.status).toHaveBeenCalledWith(401)
    //     expect(res.json).toHaveBeenCalledWith({ error: 'User not authenticated.' })
    // })

    it('should require content', async () => {
        req.body.content = ''
        await createPost(req, res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: 'Content is required' })
    })

    it('should save the post when authenticated and content provided', async () => {
        await createPost(req, res)
        expect(Post.prototype.save).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    it('should handle errors during post creation', async () => {
        Post.prototype.save.and.rejectWith(new Error('Database failure'))
        await createPost(req, res)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.send).toHaveBeenCalledWith('Error creating post')
    })
})
