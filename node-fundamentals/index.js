require('dotenv').config()
const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const parseUrl = require('./framework/parseUrl')
const jsonParser = require('./framework/parseJson')
const mongoose = require('mongoose')

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_ACCESS)
    app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

start()
