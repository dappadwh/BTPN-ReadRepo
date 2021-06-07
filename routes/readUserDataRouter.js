var {Router} = require('express')
const { verifyToken } = require('../helpers/jwt')
const { getValue, setValue } = require('../helpers/redis')
var UserDataService = require('../services/readUserDataService')
var commonResponse = require('../utils/commonResponse')

 
const userDataService = new UserDataService()
const UserDataRoute = Router()
    .get('/', async(req, res) => {
        try {
            const cache_name = 'users'
            getValue(cache_name, async (err, users_cache) => {
                if(users_cache){
                    res.json(commonResponse('success', JSON.parse(users_cache), null))
                }else{
                    let data = await userDataService.findAll()
                    setValue(cache_name, JSON.stringify(data))
                    res.json(commonResponse('success', data, null))
                }
            })
        } catch (error) {
            res.json(commonResponse('error',null,error))
        }
    })
    .get('/:noAccount', async(req, res) => {
        try {
            let data = await userDataService.findByAccountNumber(req.params.noAccount)
            res.json(commonResponse('success', data, null))
        } catch (error) {
            res.json(commonResponse('error',null, error))
        }
    })
    .get('/:noIdentity', async(req, res) => {
        try {
            let data = await userDataService.findByIdentityNumber(req.params.noIdentity)
            res.json(commonResponse('success', data, null))
        } catch (error) {
            res.json(commonResponse('error',null, ))
        }
    })
    // .get('/kawok:id', (req, res) => {
    //     const user = verifyToken(req.get('token'))
    //     console.log(user)
    // })

module.exports = UserDataRoute;