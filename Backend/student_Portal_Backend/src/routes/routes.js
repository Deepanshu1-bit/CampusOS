import { Router } from "express"
import { loginUser } from "../controllers/controllers.js"
const router = Router()

router.route('/login').post(loginUser)

export default router