import express from "express"
import protectRoute from './../middleware/protectRoute.js'
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:userId", protectRoute, sendMessage)

export default router;