import { Router } from "express"
import { dashboard, loginUser, registerUser } from "../controllers/controllers.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
const router = Router()

router.route('/login').post(loginStudent)
router.route('/register').post(registerStudent)
router.route('/attendance').post(studentAttendance)

//Protected Routes
router.route('/dashboard').get(verifyJWT, dashboard)

export default router