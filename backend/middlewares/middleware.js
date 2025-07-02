const JWT_SECRET = require('../config');
const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
  
    //checking token is present and starting with "Bearer "
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No access token provided" });
    }
             

    try { 
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId
        next();

    } catch (error) {
        res.status(403).json({ message: error.message });
        
    }
}


module.exports = authMiddleware;