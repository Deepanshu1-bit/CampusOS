import express from "express";
import cors from 'cors'
import 'dotenv/config'

import routes from "./routes/routes.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
    'http://localhost:3000',
    'https://campus-os-lemon-eta.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use('/api/v1', routes)

export { app }