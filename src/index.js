import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import personsRouter from './routes/persons'

const app = express()
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', personsRouter)

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red">Error 404 ¿?</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
