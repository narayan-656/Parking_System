const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message:"token invalid"
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token,JWT_SECRET);

        if(decoded.id) {
            req.id = decoded.id;
            next();
        } else {
            return res.json({
                message:"token not valid"
            })
        }
    } catch(err) {
        return res.status(403).json({
            message:"something went wrong, try again"
        })
    }


}

module.exports = {
    authMiddleware
}