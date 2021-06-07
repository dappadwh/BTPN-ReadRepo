var express = require('express');
const authentication = require('./middlewares/auth');
const AuthRoute = require('./routes/authRouter');
var UserDataRoute = require('./routes/readUserDataRouter')
require('dotenv').config()

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/api', AuthRoute)
app.use(authentication)
app.use('/userData', UserDataRoute) 

app.listen(PORT, () =>{
  console.log(`running on port ${PORT} ...`)
})