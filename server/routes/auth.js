import express from 'express'
const router = express.Router()

import { register, login, currentUser, forgotPassword } from '../controllers/auth.js'
import { requireSignin } from '../middlewares/auth.js'

router.post('/register', register)
router.post('/login', login)
router.get('/current-user', requireSignin, currentUser)
router.post('/forgot-password', forgotPassword)

export default router
