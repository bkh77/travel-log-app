import { Router } from 'express'
import { getAllTravels, addNewTravel } from '../controllers/travel.js'

const router = Router()

router.get('/', getAllTravels)
router.post('/add', addNewTravel)

export default router
