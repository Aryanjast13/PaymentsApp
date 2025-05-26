const JWT_SECRET = require('../config');
const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
  

     
    //checking token is present and starting with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(403).json({ message: "token is not valid" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try { 
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId
        
        next();

    } catch (error) {
        res.status(403).json({ message: error.message });
        
    }
}


module.exports = authMiddleware;