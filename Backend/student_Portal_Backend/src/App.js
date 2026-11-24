import express from "express";
import cors from 'cors'
import 'dotenv/config'

import routes from "./routes/routes.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use('/api/v1', routes)

export { app }