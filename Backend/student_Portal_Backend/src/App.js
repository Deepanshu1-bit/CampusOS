import express from "express";
import cors from 'cors'
import 'dotenv/config'



const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

import routes from "./routes/routes.js";

app.use('/api/v1', routes)

export { app }