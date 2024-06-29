import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import { connectToMonogoDB } from "./db/connectToMongoDb.js";

const app = express();

dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.get("/", (req, res) => {
    // root route http:loaclhost:5000
    res.send('hello world')
});
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT, () => {
    connectToMonogoDB();
    console.log("Server is running on port 5000")
})
