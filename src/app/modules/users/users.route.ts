import express from 'express'
import usercontroller from '../users/users.controller'

const router = express.Router()

router.post('/create-user', usercontroller.createUserController)

export default router
