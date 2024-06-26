import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import { connectToMonogoDB } from "./db/connectToMongoDb.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    // root route http:loaclhost:5000
    res.send('hello world')
});
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToMonogoDB();
    console.log("Server is running on port 5000")
})
