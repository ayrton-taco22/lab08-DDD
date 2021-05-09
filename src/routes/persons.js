import express from 'express'
import MongoDB from '../lib/mongo'
import persons from '../utils/mockup'
import { getPersons, nuevaPersona } from '../components/persons/controller'

const router = express.Router()
const mongo = new MongoDB()

router.get('/', (request, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/persons', getPersons)

router.get('/info', (request, response) => {
  const date = new Date()
  const con = persons.map(e => e.id).length
  response.send(`<h1> Phone has info for ${con} people</h1>
      <br>
      <h2>date: ${date}</h2>`)
})

router.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

router.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  mongo.delete(id)
  // persons = persons.filter(person => person.id !== id)

  response.status(202).end()
})

router.post('/api/persons', nuevaPersona)

export default router
