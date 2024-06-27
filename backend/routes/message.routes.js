import express from "express"
import protectRoute from "../middleware/protectRoute";

const router = express.Router();

router.post("send/:userId", protectRoute, sendMessage)

export default router;