import 'dotenv/config'
import { app } from './App.js'

const port = process.env.PORT || 8000

async function startServer() {
    try {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
    } catch (error) {
        console.log(`Error occure while running server: ${error}`);

    }
}

startServer()