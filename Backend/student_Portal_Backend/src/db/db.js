import mongoose from 'mongoose'
import { DB_Name } from '../Constants.js'
import dns from 'dns'

dns.setServers(['1.1.1.1', '8.8.8.8'])

const connectdb = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            return console.log("MONGODB_URI is not define!");
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, { dbName: DB_Name })
        console.log(`MongoDB is connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`error occur while connecting DB: ${error}`);
        process.exit(1)
    }
}

export { connectdb }