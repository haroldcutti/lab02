const express=require('express')
const app = express()
const router = require('./rutas.js')
const port=3000

app.use(router)

app.listen(port,()=>{
    console.log('Server on port ${3000}')
})
