const { verifyToken } = require("../helpers/jwt");
const commonResponse = require("../utils/commonResponse");
const authentication = (req, res, next) => {
    const token = req.get("token");
    if (token && verifyToken(token)) {
        next();
    }else {
    	res.status(401).json(commonResponse('error', null, 'You are forbidden to access!'));
    }
}

module.exports = authentication;