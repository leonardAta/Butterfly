import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { readdirSync } from 'fs'
import { join } from 'path'

dotenv.config()

const app = express()

mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: process.env.CORS_,
    }),
)

// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

const loadRoutes = async () => {
    const routesPath = './routes'
    const files = readdirSync(routesPath)
    for (let file of files) {
        const { default: route } = await import(join(process.cwd(), routesPath, file))
        app.use('/api', route)
    }
}
loadRoutes().catch(console.error)

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server running on port ${port}`))
