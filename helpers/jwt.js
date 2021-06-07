const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'rahasia'
function generateToken (data){
    const token = jwt.sign(data, JWT_SECRET_KEY);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET_KEY);
}

module.exports = {
    generateToken, 
    verifyToken
}