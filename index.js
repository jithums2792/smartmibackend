const express = require('express')
const cors = require('cors')
require('./services/db')
const companyRouter = require('./routers/company.router')
const unitRouter = require('./routers/unit.router')
const manufatureRouter = require('./routers/manufature.route')
const userRouter = require('./routers/user.router')
const app = express()
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(cors(
    {origin: 'http://localhost:4200'}
))



app.use('/api/company', companyRouter)
app.use('/api/unit', unitRouter)
app.use('/api/manufature', manufatureRouter)
app.use('/api/user', userRouter)


app.listen(process.env.PORT || 3000, () => console.log('server running'))