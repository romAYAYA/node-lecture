const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')

const app = new Application()

app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`))

app.use(jsonParser)
app.addRouter(userRouter)
