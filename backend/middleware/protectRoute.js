import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorised - No Token Provided" })
        }
        const decoded = jwt.verify(token, "DBASJDKADSA")

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorised - Invalid Token" })
        }
        const user = await User.findById(decoded.userId,).select('-password')

        req.user = user

        next();
    } catch (error) {
        console.log('Error in protectRoute middleware: ', error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute