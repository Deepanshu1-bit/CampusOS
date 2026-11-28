import express from "express";
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

import routes from "./routes/routes.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
    `http://localhost:3000`,
    'https://campus-os-lemon-eta.vercel.app'
];

app.use(cookieParser())

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use((req, res, next) => {
    // console.log("Request Origin:", req.headers.origin);
    // console.log("Request URL:", req.originalUrl);
    // console.log("Backend received request at:", req.protocol + "://" + req.get("host"));
    // console.log("Backend URL:", process.env.PORT);
    next();
});

app.use('/api/v1', routes)

export { app }