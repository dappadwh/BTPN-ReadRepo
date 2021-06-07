var {Router} = require('express')
const { generateToken, verifyToken } = require('../helpers/jwt')
const commonResponse = require('../utils/commonResponse')

const AuthRoute = Router()
    .post('/login', (req, res) => {
        const {username, password}  = req.body
        if (!username || !password){
            res.json(commonResponse('error', null, 'Username or Password is required!'))
        } else if (username == "admin" && password == "admin"){
            res.json(commonResponse('success', generateToken({username, password}), 'token generated!'))
        } else {
            res.json(commonResponse('error', null, 'invalid user!'))
        }
    })

module.exports = AuthRoute;