import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorised - No Token Provided" })
        }
        const decoded = jwt.verify(token, "DBASJDKADSA")
        console.log('decoded', decoded)
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorised - Invalid Token" })
        }
        const user = await User.findById(decoded.userId,).select('-password')
        console.log(user)
        req.user = user

        next();
        console.log('no error in the protected Route')
    } catch (error) {
        console.log('Error in protectRoute middleware: ', error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute