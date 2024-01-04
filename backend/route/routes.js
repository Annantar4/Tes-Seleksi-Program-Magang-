import express from "express"

import { postLogin, getUsers, postUsers } from "../controller/user.js"

const router = express.Router()

router.post('/login', postLogin)
router.get('/user', getUsers)
router.post('/user',postUsers)


export default router;