const express = require('express')
const crypto = require('crypto')

const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/', (req, res) => {
    res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jonathan Queiroz'
    })
})

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)


module.exports = routes