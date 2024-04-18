import express from 'express'
const router = express.Router()

import { requireSignin } from '../middlewares/auth.js'
import { createPost } from '../controllers/post.js'

router.post('/create-post', requireSignin, createPost)

export default router
