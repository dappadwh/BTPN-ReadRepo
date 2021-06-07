const jwt = require('jsonwebtoken');

function generateToken (data){
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = {
    generateToken, 
    verifyToken
}