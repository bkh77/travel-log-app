import express from 'express'
import dotenv from 'dotenv'
import travelRoutes from './routes/travel.js'
import connectDB from './config/db.js'
dotenv.config()
connectDB()

const app = express()

// body parser and json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// use routes
app.use('/api/travel', travelRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
