import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import formData from 'express-form-data'

dotenv.config()

const PORT = 5000
const DB_URL = process.env.DB_ACCESS

const app = express()

app.use(cors())
app.use(formData.parse())
app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)
app.use(fileUpload({}))

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

startApp()
