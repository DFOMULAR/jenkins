const app = require('./src/app')
require('dotenv').config()
// console.log(process.env)
const port = process.env.PORT | 3000
app.listen(port, console.log("server started at port "+ port))
