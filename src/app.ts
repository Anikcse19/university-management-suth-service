import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from '../src/app/modules/users/users.route'
const app: Application = express()

//cors

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', userRoutes)

export default app
