import express from 'express'
const router = express.Router()

import { requireSignin } from '../middlewares/index.js'
import {
    register,
    login,
    currentUser,
    forgotPassword,
    profileUpdate,
    findPeople,
    addFollower,
    userFollow,
} from '../controllers/auth.js'

router.post('/register', register)
router.post('/login', login)
router.get('/current-user', requireSignin, currentUser)
router.post('/forgot-password', forgotPassword)

router.put('/profile-update', requireSignin, profileUpdate)
router.get('/find-people', requireSignin, findPeople)

router.put('/user-follow', requireSignin, addFollower, userFollow)

export default router
